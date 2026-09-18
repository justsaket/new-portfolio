SELECT COUNT(*) AS leads_captured FROM leads;

SELECT ROUND(100.0 * AVG(CASE WHEN response = 'positive' THEN 1 ELSE 0 END), 2)
AS positive_response_rate FROM leads;

SELECT source, COUNT(*) AS leads,
ROUND(AVG(fit_score), 1) AS avg_fit,
ROUND(AVG(intent_score), 1) AS avg_intent
FROM leads GROUP BY source ORDER BY leads DESC;

SELECT workflow_status, COUNT(*) AS records
FROM leads GROUP BY workflow_status ORDER BY records DESC;

SELECT ROUND(AVG(latency_sec), 1) AS avg_workflow_latency_sec,
MAX(latency_sec) AS max_latency_sec FROM leads;