När man tankat ner projektet, öppna i vscode och öppna en terminal och skriv "npm i" och tryck enter, därefter "npm run dev".

Backend instruktioner för oss själva:

1. Ladda ner min superfina ZIP-fil (har lagt till CORS, nycklar och en massa skit som inte finns i officiella repot)
1. Ladda ner och installera SQL server här: https://www.microsoft.com/en-us/sql-server/sql-server-downloads OBS!!!!!!!!!!!!!!!! (kanske måste köra via docker på mac?)
2. Ladda ner SQL server managagement studio https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16
3. Kör igång en SQL server (klicka OK på allt bara, allt default), gör en databas som heter foodDB2.
4. Ladda ner visual studio (ej vscode)
5. Öppna projektet i visual studio genom att öppna matGPT.sln.
6. Klicka på view (högst upp till vänster) > Other Windows > Package Manager Console
7. Du får upp en terminal längst ner, skriv in Update-Package, tryck enter och be till gud
8. Om den inte gnäller på nåt så tryck på PLAY-knappen högst upp.
9. Generera recept och var glad!!!!! Stäng ej ner swagger-rutan för då stängs den av.

    OBS!!!! SQL-portarna kan vara annorlunda och eventuellt blockade på mac pga CORS, isf borde man få 405 bad response och det betyder att man måste allowa den porten i project.cs, kan visa vart om det är ett problem.
