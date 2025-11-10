# Project Overview

This repository contains the codebase generated from the following Jira issues:

- **SCRUM-259**: MVP - Mood Input, Recipe Recommendation, User Authentication, Basic UI
- **SCRUM-260**: Post-MVP - Enhanced Mood Detection, User Profiles, Favorites, Nutritional Filters
- **SCRUM-261**: Future Expansions - AI Mood Detection, Third-Party Integrations, Social Sharing

## Features

### MVP Features (SCRUM-259)
- Backend server using Node.js and Express
- User registration and login endpoints with simple JWT implementation
- Recipe model with mood tags and basic favorite management
- Frontend React app with mood selection and recipe listing

### Post-MVP Enhancements (SCRUM-260)
- Sentiment analysis microservice stub for text mood detection
- Extended user profile with dietary preferences (to be implemented)
- Added favorites endpoints for user recipe favorites

### Future Expansions (SCRUM-261)
- AI/ML based mood detection microservice placeholder (audio/video)
- Social sharing microservice with share API
- Plans for third-party recipe API integrations
- Multi-language support and CDN for static content
- Community recipe submission support

## Repository Structure

- /backend: Node.js backend server and microservices
- /frontend: React frontend application
- /docs: Documentation including this overview

## Traceability

Each commit message references the Jira issue it addresses, allowing traceability between code and requirements.

---

Generated and committed by automation agent.