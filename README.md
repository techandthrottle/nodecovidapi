# nodecovidapi
**PH Covid19 Case Tracker API based on NodeJS**

You may want to download your Google API JSON file that contains your <br/>
* Private Key
* Auth URI
* Token and etc

Data is pulled from Google Spreadsheet maintained by Data Science Philippines. <br/>
[Source](https://docs.google.com/spreadsheets/d/16g_PUxKYMC0XjeEKF6FPUBq2-pFgmTkHoj5lbVrGLhE/edit#gid=521959656)
Note: Data may be outdated

To pull data from Google Spreadsheet into your local MongoDB or Remote MongoDB.

Pull the DOH summary of cases: <br/>
ex: Newly Recorded Case, Deaths, Recovery and etc. <br/>
[/covid/maintenance/summary/](/covid/maintenance/summary/) <br/>

Pull DOH data drop: <br/>
ex: Patient Gender, Age, Address, Patient Status, location and etc. <br/>
[/covid/maintenance/datadrop/](/covid/maintenance/datadrop/) <br/>

Usage:

Get the latest total number of cases <br/>
[/covid/total_cases/](/covid/total_cases/) <br/>

Get the latest total number of death cause by the Virus <br/>
[/covid/total_death/](/covid/total_death/) <br/>

Get the latest total number of patients that has recovered from the Virus <br/>
[/covid/total_recovery/](/covid/total_recovery/) <br/>

Get the latest Summary of Cases <br/>
[/covid/summary_latest/](/covid/summary_latest/) <br/>

Get PH Covid19 new recorded cases on selected the date ex: 05-24-2020 <br/>
[/covid/daily_case_summary/mm-dd-yyyy](/covid/daily_case_summary/mm-dd-yyyy) <br/>

Get PH Covid19 new recorded recovery on the selected date ex: 05-24-2020 <br/>
[/covid/daily_recovery_summary/mm-dd-yyyy](/covid/daily_recovery_summary/mm-dd-yyyy) <br/>

Get PH Covid19 new recorded death on the selected date ex: 05-24-2020 <br/>
[/covid/daily_death_summary/mm-dd-yyyy](/covid/daily_death_summary/mm-dd-yyyy) <br/>

**Sample Output using POSTMAN** <br/>
![img](/nodeapi.PNG)
