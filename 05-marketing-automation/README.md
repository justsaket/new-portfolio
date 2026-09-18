# 05 — Marketing & Automation Command Center

An end-to-end automation portfolio project combining LinkedIn publishing, AI calling, API-based lead generation, and AI workflow agents into one measurable operating system.

## Business Objective
Reduce repetitive marketing operations while creating a traceable pipeline from Lead Source → Qualification → Outreach → Follow-up → Content → Event Log → Performance.

## Modules
### 01 — LinkedIn Publishing Automation
A scheduled content workflow that prepares a post, validates content fields, publishes through an approved integration, records the result, and captures engagement metrics.

### 02 — AI Calling Agent
An n8n-oriented conversational calling architecture for automated outreach. It separates lead context, call objective, conversation state, outcome classification, and follow-up action.

Actual calling requires a connected telephony provider and appropriate consent/compliance controls.

### 03 — API Lead Generation Engine
A modular lead pipeline that accepts structured API responses, normalizes company/contact fields, deduplicates records, scores leads, and routes qualified leads into outreach.

### 04 — AI Workflow Agent
An agent-style orchestration layer that converts a business task into structured workflow steps, validates required inputs, executes approved actions, and logs the result.

## Architecture
Sources / APIs → Ingestion & Validation → Normalization & Deduplication → Lead Scoring → Automation Router → LinkedIn / Calling / CRM / AI Agent → Event Log → KPI Layer → Executive Dashboard

## KPIs
- Leads captured
- Qualified-lead rate
- Outreach attempts
- Contact rate
- Positive-response rate
- Follow-up completion
- Automation success rate
- API error rate
- Average workflow latency
- Content publishing success

## Included
- workflow-blueprint.json — n8n-style automation blueprint
- lead_pipeline.py — lead normalization, scoring and routing simulation
- queries.sql — operational KPI queries
- data.csv — sample lead/event data
- dashboard.svg — executive command-center UI
- POWER_AUTOMATION.md — implementation notes and KPI definitions

## Stack
n8n • APIs • Python • SQL • Webhooks • AI Agents • CRM concepts • Automation Analytics
