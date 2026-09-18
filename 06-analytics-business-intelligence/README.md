# 06 — Analytics & Business Intelligence Command Center

A multi-domain BI portfolio project bringing together four executive analytics use cases: **Customer Segmentation & LTV, HR Attrition, Financial Performance, and Mutual Fund Comparison**.

## 01 — Customer Segmentation & Lifetime Value
Segments customers using behavioral and value variables, then connects segment size with revenue contribution and estimated lifetime value.

Focus: RFM-style thinking, segment profiling, LTV, retention opportunities and value concentration.

## 02 — HR Attrition & Workforce Analytics
Analyzes employee attrition across department, job role, tenure, age band, overtime and satisfaction indicators.

Focus: workforce KPIs, attrition segmentation, risk signals and management drill-downs.

## 03 — Financial Performance BI
Tracks revenue, cost, gross profit, operating expense, operating profit and margin movement over time.

Focus: P&L-style KPI modeling, variance analysis, margin bridge thinking and management reporting.

## 04 — Mutual Fund Performance Comparison
Compares funds using return, volatility, drawdown and risk-adjusted performance indicators.

Focus: normalized comparison, risk/return trade-offs and transparent metric definitions. This is analytical research, not investment advice.

## Executive Architecture
Source Data → Data Quality → Star-Model Concepts → KPI Measures → Segmentation / Variance / Risk Analysis → Drill-down → Executive Insight → Action

## Core KPIs
Customer: Customers, Revenue, LTV, Segment Mix
HR: Headcount, Attrition Rate, Tenure, Overtime, Satisfaction
Finance: Revenue, Gross Profit, Operating Profit, Gross Margin, Operating Margin
Funds: Return, Volatility, Max Drawdown, Risk/Return profile

## Included
- data.csv — multi-domain analytical sample
- analysis.py — reusable metric and segmentation logic
- queries.sql — analytical SQL layer
- dashboard.svg — executive BI command-center UI
- POWER_BI.md — dashboard model and measure blueprint

## Stack
Power BI • Python • Pandas • SQL • Excel • DAX concepts • Data Modeling • Business Intelligence
