use moneycontrol;

-- Totales de ingresos y egresos por dia, mes o año
DELIMITER //
CREATE PROCEDURE getIncomeAndExpenseTotals(IN p_day INT, IN p_month INT, IN p_year INT, IN p_idUser INT)
BEGIN
	SELECT 
        SUM(CASE WHEN isIncome = 1 THEN amount ELSE 0 END) as totalIncome,
        SUM(CASE WHEN isIncome = 0 THEN amount ELSE 0 END) as totalExpense
    FROM transactions
    WHERE idUser = p_idUser
        AND (
			(p_day IS NOT NULL AND YEAR(date) = p_year AND MONTH(date) = p_month AND DAY(date) = p_day)
            OR (p_month IS NOT NULL AND p_day IS NULL AND YEAR(date) = p_year AND MONTH(date) = p_month)
            OR (p_year IS NOT NULL AND p_month IS NULL AND p_day IS NULL AND YEAR(date) = p_year)
        )
   -- GROUP BY isIncome
    ;

END //
DELIMITER ;

-- drop procedure getIncomeAndExpenseTotals;
call getIncomeAndExpenseTotals(null,12,2023,1);



-- Obtener las transacciones del un dia
DELIMITER //
CREATE PROCEDURE getTransactionsOfDay(IN p_day INT, IN p_month INT, IN p_year INT, IN p_idUser INT)
BEGIN
	SELECT amount, description, idCategory, idAccount, isIncome, date, idUser
	FROM transactions
	WHERE idUser = p_idUser
	AND YEAR(date) = p_year
	AND MONTH(date) = p_month
	AND DAY(date) = p_day;
END //
DELIMITER ;

call getTransactionsOfDay(01,01,2024,1);