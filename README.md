# nodecovidapi
**PH Covid19 Case Tracker API based on NodeJS**

Data is pulled from Goog Spreadsheet maintained by Data Science Philippines.
https://docs.google.com/spreadsheets/d/16g_PUxKYMC0XjeEKF6FPUBq2-pFgmTkHoj5lbVrGLhE/edit#gid=521959656

To pull data from Google Spreadsheet into your local MongoDB or Remote MongoDB.

Pull the DOH summary of cases:
ex: Newly Recorded Case, Deaths, Recovery and etc.
/covid/maintenance/summary

Pull DOH data drop:
ex: Patient Gender, Age, Address, Patient Status, location and etc.
/covid/maintenance/datadrop

Usage:

Get the latest total number of cases
(/covid/total_cases/)

Get the latest total number of death cause by the Virus
(/covid/total_death/)

Get the latest total number of patients that has recovered from the Virus
(/covid/total_recovery/)

Get the latest Summary of Cases
(/covid/summary_latest/)

Get PH Covid19 new recorded cases on selected the date ex: 05-24-2020
(/covid/daily_case_summary/mm-dd-yyyy)

Get PH Covid19 new recorded recovery on the selected date ex: 05-24-2020
(/covid/daily_recovery_summary/mm-dd-yyyy)

Get PH Covid19 new recorded death on the selected date ex: 05-24-2020
(/covid/daily_death_summary/mm-dd-yyyy)
