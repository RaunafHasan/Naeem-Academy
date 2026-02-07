// SQL Database Concepts
const sqlConcepts = [
    {
        name: 'CREATE DATABASE',
        description: 'নতুন Database তৈরি করতে ব্যবহৃত হয়।\n\n📌 বৈশিষ্ট্য:\n• নতুন ডাটাবেস তৈরি করে\n• একটি DB এ অনেক টেবিল থাকতে পারে\n• DB এর নাম অনন্য হতে হবে',
        descriptionBn: 'নতুন Database তৈরি করতে ব্যবহৃত হয়।',
        syntax: 'CREATE DATABASE database_name;',
        example: 'CREATE DATABASE SchoolDB;',
        output: 'Database SchoolDB successfully created!',
        challenge: 'HospitalDB নামে একটি নতুন Database তৈরি করো।',
        icon: 'DB+',
        color: 'from-fuchsia-500 to-pink-500',
        difficulty: 'easy'
    },
    {
        name: 'DROP DATABASE',
        description: 'সম্পূর্ণ Database delete করতে ব্যবহৃত হয়।\n\n📌 সতর্কতা:\n• এটি একটি irreversible অপারেশন\n• DB এর সব ডেটা চিরতরে মুছে যাবে\n• সাবধানে ব্যবহার করুন',
        descriptionBn: 'সম্পূর্ণ Database delete করতে।',
        syntax: 'DROP DATABASE database_name;',
        example: 'DROP DATABASE SchoolDB;',
        output: 'Database SchoolDB dropped successfully!',
        challenge: 'TempDB নামের একটি ডাটাবেস মুছে ফেলো।',
        icon: 'DB-',
        color: 'from-red-500 to-pink-500',
        difficulty: 'easy'
    },
    {
        name: 'CREATE TABLE',
        description: 'নতুন Table তৈরি করতে ব্যবহৃত হয়।\n\n📌 গঠন:\n• নির্ধারিত column গুলি দিয়ে table তৈরি\n• প্রতিটি column এর নিজস্ব data type আছে\n• PRIMARY KEY এবং CONSTRAINT যোগ করা যায়',
        descriptionBn: 'নতুন Table তৈরি করতে।',
        syntax: 'CREATE TABLE table_name (\n   column1 datatype,\n   column2 datatype,\n   ...\n);',
        example: 'CREATE TABLE Students (\n   ID INT PRIMARY KEY,\n   Name VARCHAR(50),\n   Marks INT\n);',
        output: 'Table Students created with 3 columns: ID, Name, Marks',
        challenge: 'Doctors নামে একটি টেবিল তৈরি করো: (ID INT, Name VARCHAR(50), Department VARCHAR(50))',
        icon: 'TBL',
        color: 'from-cyan-500 to-blue-500',
        difficulty: 'easy'
    },
    {
        name: 'DROP TABLE',
        description: 'সম্পূর্ণ Table delete করতে ব্যবহৃত হয়।\n\n📌 প্রভাব:\n• Table এর সব ডেটা মুছে যায়\n• Table এর structure-ও মুছে যায়\n• Database এ থেকে যায়',
        descriptionBn: 'সম্পূর্ণ Table delete করতে।',
        syntax: 'DROP TABLE table_name;',
        example: 'DROP TABLE Students;',
        output: 'Table Students dropped successfully!',
        challenge: 'TempStudents নামের টেবিল মুছে ফেলো।',
        icon: 'TBL-',
        color: 'from-red-500 to-orange-500',
        difficulty: 'easy'
    },
    {
        name: 'ALTER TABLE - ADD',
        description: 'Table এ নতুন column যোগ করতে।\n\n📌 ব্যবহার:\n• বিদ্যমান table এ নতুন column যোগ করা\n• Default value-ও যোগ করা যায়\n• একাধিক column একসাথে যোগ করা যায়',
        descriptionBn: 'Table এ নতুন column যোগ করতে।',
        syntax: 'ALTER TABLE table_name\nADD column_name datatype;',
        example: 'ALTER TABLE Students\nADD Age INT;',
        output: 'Column Age added to Students table',
        challenge: 'Doctors টেবিলে PhoneNumber VARCHAR(15) যোগ করো।',
        icon: 'ALT+',
        color: 'from-green-500 to-emerald-500',
        difficulty: 'easy'
    },
    {
        name: 'ALTER TABLE - DROP',
        description: 'Table থেকে column remove করতে।\n\n📌 গুরুত্বপূর্ণ:\n• Column এর সব ডেটা মুছে যাবে\n• একাধিক column drop করা যায়\n• কিছু DBMS এ সীমাবদ্ধতা আছে',
        descriptionBn: 'Table থেকে column মুছতে।',
        syntax: 'ALTER TABLE table_name\nDROP COLUMN column_name;',
        example: 'ALTER TABLE Students\nDROP COLUMN Age;',
        output: 'Column Age removed from Students table',
        challenge: 'Doctors টেবিল থেকে PhoneNumber column মুছে ফেলো।',
        icon: 'ALT-',
        color: 'from-yellow-500 to-orange-500',
        difficulty: 'medium'
    },
    {
        name: 'ALTER TABLE - MODIFY',
        description: 'Column এর data type বা constraint পরিবর্তন করতে।\n\n📌 পরিবর্তন:\n• Data type পরিবর্তন করা\n• Column size বৃদ্ধি বা হ্রাস করা\n• NULL/NOT NULL constraint পরিবর্তন',
        descriptionBn: 'Column এর data type পরিবর্তন করতে।',
        syntax: 'ALTER TABLE table_name\nMODIFY COLUMN column_name new_datatype;',
        example: 'ALTER TABLE Students\nMODIFY COLUMN Name VARCHAR(100);',
        output: 'Column Name modified to VARCHAR(100)',
        challenge: 'Students টেবিলে Marks কে DECIMAL(5,2) করে দাও।',
        icon: 'ALT~',
        color: 'from-purple-500 to-violet-500',
        difficulty: 'medium'
    },
    {
        name: 'INSERT INTO',
        description: 'Table এ নতুন record/row যোগ করতে।\n\n📌 পদ্ধতি:\n• একটি record যোগ করা\n• একাধিক record একসাথে যোগ করা\n• Specific column এ ডেটা যোগ করা',
        descriptionBn: 'Table এ নতুন ডেটা যোগ করতে।',
        syntax: 'INSERT INTO table_name (col1, col2)\nVALUES (val1, val2);',
        example: 'INSERT INTO Students (ID, Name, Marks)\nVALUES (1, \'Rahim\', 90);',
        output: 'ID | Name  | Marks\n1  | Rahim | 90',
        challenge: 'Doctors টেবিলে একটি নতুন ডাক্তার যোগ করো: (1, \'Dr. Karim\', \'Cardiology\')',
        icon: 'INS',
        color: 'from-green-500 to-teal-500',
        difficulty: 'easy'
    },
    {
        name: 'SELECT',
        description: 'Table থেকে data retrieve করতে।\n\n📌 ব্যবহার:\n• সব column যেমন: SELECT *\n• নির্দিষ্ট column যেমন: SELECT col1, col2\n• শর্ত সহ: SELECT WHERE condition',
        descriptionBn: 'Table থেকে ডেটা বের করতে।',
        syntax: 'SELECT column1, column2 FROM table_name;',
        example: 'SELECT Name, Marks FROM Students;',
        output: 'Name  | Marks\nRahim | 90\nKarim | 85',
        challenge: 'Doctors টেবিল থেকে নাম ও বিভাগ দেখাও।',
        icon: 'SEL',
        color: 'from-blue-500 to-cyan-500',
        difficulty: 'easy'
    },
    {
        name: 'SELECT DISTINCT',
        description: 'Duplicate মান ছাড়া unique values দেখাতে।\n\n📌 উপযোগিতা:\n• একটি column এর সব unique values দেখা\n• Duplicate row remove করা\n• Data সম্পর্কে overview পাওয়া',
        descriptionBn: 'Unique মান দেখাতে।',
        syntax: 'SELECT DISTINCT column FROM table_name;',
        example: 'SELECT DISTINCT Department FROM Doctors;',
        output: 'Department\nCardiology\nNeurology\nOrthopedics',
        challenge: 'Students টেবিল থেকে unique grades দেখাও।',
        icon: 'DIS',
        color: 'from-indigo-500 to-purple-500',
        difficulty: 'easy'
    },
    {
        name: 'WHERE clause',
        description: 'শর্ত দিয়ে data filter করতে।\n\n📌 Operators:\n• Comparison: =, !=, <, >, <=, >=\n• Logical: AND, OR, NOT\n• Range: BETWEEN, IN',
        descriptionBn: 'শর্ত অনুযায়ী ডেটা ফিল্টার করতে।',
        syntax: 'SELECT * FROM table_name WHERE condition;',
        example: 'SELECT * FROM Students WHERE Marks > 80;',
        output: 'ID | Name  | Marks\n1  | Rahim | 90\n3  | Fatima| 85',
        challenge: 'Doctors টেবিল থেকে Cardiology বিভাগের ডাক্তার দেখাও।',
        icon: 'WH',
        color: 'from-yellow-500 to-orange-500',
        difficulty: 'easy'
    },
    {
        name: 'ORDER BY',
        description: 'ডেটা সাজিয়ে (sort) দেখাতে।\n\n📌 সাজানো:\n• ASC - Ascending (ছোট থেকে বড়) - Default\n• DESC - Descending (বড় থেকে ছোট)\n• একাধিক column অনুযায়ী সাজানো যায়',
        descriptionBn: 'ডেটা সাজিয়ে দেখাতে।',
        syntax: 'SELECT * FROM table_name\nORDER BY column ASC|DESC;',
        example: 'SELECT * FROM Students\nORDER BY Marks DESC;',
        output: 'ID | Name   | Marks\n1  | Rahim  | 90\n3  | Fatima | 85\n2  | Karim  | 75',
        challenge: 'Doctors টেবিল থেকে Name অনুযায়ী ascending order এ দেখাও।',
        icon: 'ORD',
        color: 'from-pink-500 to-rose-500',
        difficulty: 'easy'
    },
    {
        name: 'AND operator',
        description: 'একাধিক শর্ত একসাথে চেক করতে (সব শর্ত সত্য হতে হবে)।\n\n📌 যুক্তি:\n• সব condition সত্য হলে row দেখা যাবে\n• একটি মিথ্যা হলে row দেখা যাবে না\n• nested AND ব্যবহার করা যায়',
        descriptionBn: 'একাধিক শর্ত দিয়ে filter করতে (সব সত্য)।',
        syntax: 'SELECT * FROM table_name\nWHERE cond1 AND cond2;',
        example: 'SELECT * FROM Students\nWHERE Marks > 80 AND Age < 20;',
        output: 'ID | Name | Marks | Age\n1  | Rahim| 90    | 19',
        challenge: 'Doctors থেকে Cardiology বিভাগ ও age < 40 এমন দেখাও।',
        icon: '&&',
        color: 'from-red-500 to-pink-500',
        difficulty: 'medium'
    },
    {
        name: 'OR operator',
        description: 'যেকোনো একটি শর্ত সত্য হলে data দেখাতে।\n\n📌 যুক্তি:\n• যেকোনো condition সত্য হলে row দেখা যাবে\n• সব condition মিথ্যা হলেই row ছাড়া যায়\n• AND এর সাথে combine করা যায়',
        descriptionBn: 'যেকোনো একটি শর্ত সত্য হলে।',
        syntax: 'SELECT * FROM table_name\nWHERE cond1 OR cond2;',
        example: 'SELECT * FROM Students\nWHERE Marks > 90 OR Age < 18;',
        output: 'ID | Name   | Marks | Age\n1  | Rahim  | 95    | 22\n4  | Nusrat | 75    | 17',
        challenge: 'Doctors থেকে Neurology বিভাগ অথবা age > 50 দেখাও।',
        icon: '||',
        color: 'from-blue-500 to-indigo-500',
        difficulty: 'medium'
    },
    {
        name: 'NOT operator',
        description: 'শর্তকে উল্টো (negate) করতে - যা শর্ত পূরণ করে না।\n\n📌 ব্যবহার:\n• NOT condition এর বিপরীত ফলাফল দেখাতে\n• WHERE NOT, WHERE NOT IN, ইত্যাদি\n• != এর বিকল্প হিসেবে ব্যবহার করা যায়',
        descriptionBn: 'শর্তের বিপরীত ফলাফল দেখাতে।',
        syntax: 'SELECT * FROM table_name\nWHERE NOT condition;',
        example: 'SELECT * FROM Students WHERE NOT Marks = 50;',
        output: 'ID | Name   | Marks\n1  | Rahim  | 90\n2  | Karim  | 75\n3  | Fatima | 85',
        challenge: 'Doctors থেকে Cardiology বিভাগ ছাড়া বাকি সব দেখাও।',
        icon: '!',
        color: 'from-orange-500 to-red-500',
        difficulty: 'medium'
    },
    {
        name: 'UPDATE',
        description: 'বিদ্যমান data পরিবর্তন করতে।\n\n📌 সতর্কতা:\n• WHERE clause দিতে ভুলবেন না\n• পুরো column update হতে পারে\n• একাধিক column একসাথে update করা যায়',
        descriptionBn: 'বিদ্যমান ডেটা পরিবর্তন করতে।',
        syntax: 'UPDATE table_name\nSET column=value\nWHERE condition;',
        example: 'UPDATE Students SET Marks = 95\nWHERE Name = \'Rahim\';',
        output: 'ID | Name  | Marks\n1  | Rahim | 95',
        challenge: 'Students টেবিলে Karim এর Marks কে 85 করে দাও।',
        icon: 'UPD',
        color: 'from-green-500 to-emerald-500',
        difficulty: 'medium'
    },
    {
        name: 'DELETE',
        description: 'Table থেকে record delete করতে।\n\n📌 গুরুত্ব:\n• WHERE clause ছাড়া সব row delete হয়ে যাবে\n• নির্দিষ্ট condition অনুযায়ী delete করা যায়\n• একবার delete হলে ফিরে আসে না',
        descriptionBn: 'Table থেকে ডেটা মুছতে।',
        syntax: 'DELETE FROM table_name WHERE condition;',
        example: 'DELETE FROM Students WHERE Marks < 40;',
        output: 'Rows with Marks < 40 deleted',
        challenge: 'Doctors থেকে Orthopedics বিভাগের ডাক্তার মুছে ফেলো।',
        icon: 'DEL',
        color: 'from-red-500 to-pink-500',
        difficulty: 'medium'
    },
    {
        name: 'LIMIT',
        description: 'নির্দিষ্ট সংখ্যক rows select করতে।\n\n📌 ব্যবহার:\n• প্রথম N টি row দেখা\n• Pagination এর জন্য ব্যবহার করা হয়\n• OFFSET এর সাথে combine করা যায়',
        descriptionBn: 'নির্দিষ্ট সংখ্যক row দেখাতে।',
        syntax: 'SELECT * FROM table_name LIMIT number;',
        example: 'SELECT * FROM Students LIMIT 5;',
        output: 'প্রথম 5টি student দেখাবে',
        challenge: 'Doctors টেবিল থেকে প্রথম 3 জন ডাক্তার দেখাও।',
        icon: 'LIM',
        color: 'from-cyan-500 to-blue-500',
        difficulty: 'easy'
    },
    {
        name: 'COUNT()',
        description: 'কতগুলো rows আছে তা গণনা করতে।\n\n📌 ফলাফল:\n• Integer number return করে\n• NULL values গণনা করে না (যদি condition থাকে)\n• GROUP BY এর সাথে ব্যবহার করা যায়',
        descriptionBn: 'total rows গণনা করতে।',
        syntax: 'SELECT COUNT(*) FROM table_name;',
        example: 'SELECT COUNT(*) FROM Students;',
        output: 'COUNT(*)\n    5',
        challenge: 'Cardiology বিভাগে কতজন ডাক্তার আছেন গুনো।',
        icon: 'CNT',
        color: 'from-purple-500 to-pink-500',
        difficulty: 'easy'
    },
    {
        name: 'SUM()',
        description: 'Column এর মান যোগ করতে।\n\n📌 শর্ত:\n• শুধুমাত্র numeric columns এর জন্য\n• NULL values ignore করা হয়\n• WHERE clause এর সাথে ব্যবহার করা যায়',
        descriptionBn: 'Column এর মান যোগ ফল।',
        syntax: 'SELECT SUM(column) FROM table_name;',
        example: 'SELECT SUM(Marks) FROM Students;',
        output: 'SUM(Marks)\n     425',
        challenge: 'সব Students দের মোট Marks বের করো।',
        icon: 'SUM',
        color: 'from-yellow-500 to-orange-500',
        difficulty: 'easy'
    },
    {
        name: 'AVG()',
        description: 'Column এর average/গড় মান বের করতে।\n\n📌 গণনা:\n• (সব মান এর যোগফল) / (মান এর সংখ্যা)\n• NULL values ignore করা হয়\n• ROUND() দিয়ে সংক্ষিপ্ত করা যায়',
        descriptionBn: 'Column এর গড় মান বের করতে।',
        syntax: 'SELECT AVG(column) FROM table_name;',
        example: 'SELECT AVG(Marks) FROM Students;',
        output: 'AVG(Marks)\n   85',
        challenge: 'সব Doctors দের গড় বয়স বের করো।',
        icon: 'AVG',
        color: 'from-green-500 to-teal-500',
        difficulty: 'easy'
    },
    {
        name: 'MIN() & MAX()',
        description: 'Column এর সর্বনিম্ন ও সর্বোচ্চ মান।\n\n📌 ব্যবহার:\n• MIN() - সর্বনিম্ন value\n• MAX() - সর্বোচ্চ value\n• একসাথে ব্যবহার করা যায়',
        descriptionBn: 'সর্বনিম্ন ও সর্বোচ্চ মান।',
        syntax: 'SELECT MIN(column), MAX(column)\nFROM table_name;',
        example: 'SELECT MIN(Marks), MAX(Marks) FROM Students;',
        output: 'MIN(Marks) | MAX(Marks)\n    50     |    95',
        challenge: 'Doctors দের সর্বনিম্ন ও সর্বোচ্চ বয়স বের করো।',
        icon: 'M/M',
        color: 'from-red-500 to-pink-500',
        difficulty: 'easy'
    },
    {
        name: 'LIKE clause',
        description: 'Pattern matching দিয়ে search করতে।\n\n📌 Patterns:\n• % - কোনো কতগুলো characters মিল\n• _ - একটি character মিল\n• \'A%\' - A দিয়ে শুরু\n• \'%A\' - A দিয়ে শেষ',
        descriptionBn: 'Pattern match করে search করতে।',
        syntax: 'SELECT * FROM table_name\nWHERE column LIKE \'pattern\';',
        example: 'SELECT * FROM Students WHERE Name LIKE \'R%\';',
        output: 'ID | Name   | Marks\n1  | Rahim  | 90\n4  | Ruma   | 88',
        challenge: 'Doctors টেবলে যাদের নাম \'D\' দিয়ে শুরু তাদের দেখাও।',
        icon: 'LIKE',
        color: 'from-indigo-500 to-purple-500',
        difficulty: 'medium'
    },
    {
        name: 'IN operator',
        description: 'একাধিক value এ condition দিতে।\n\n📌 সুবিধা:\n• OR এর পরিবর্তে ব্যবহার করা যায়\n• List of values specify করা যায়\n• NOT IN দিয়ে বিপরীত ফলাফল পাওয়া যায়',
        descriptionBn: 'একাধিক value check করতে।',
        syntax: 'SELECT * FROM table_name\nWHERE column IN (val1, val2, ...);',
        example: 'SELECT * FROM Students\nWHERE Name IN (\'Rahim\', \'Karim\', \'Fatima\');',
        output: 'ID | Name   | Marks\n1  | Rahim  | 90\n2  | Karim  | 75\n3  | Fatima | 85',
        challenge: 'Doctors থেকে Cardiology অথবা Neurology বিভাগ দেখাও।',
        icon: 'IN',
        color: 'from-blue-500 to-cyan-500',
        difficulty: 'medium'
    },
    {
        name: 'BETWEEN',
        description: 'একটি range এর মধ্যে value check করতে।\n\n📌 ব্যবহার:\n• Inclusive range (উভয় সীমা অন্তর্ভুক্ত)\n• তারিখ, সংখ্যা সব type এ প্রযোজ্য\n• NOT BETWEEN দিয়ে বিপরীত পাওয়া যায়',
        descriptionBn: 'Range এর মধ্যে value check করতে।',
        syntax: 'SELECT * FROM table_name\nWHERE column BETWEEN val1 AND val2;',
        example: 'SELECT * FROM Students\nWHERE Marks BETWEEN 60 AND 90;',
        output: 'ID | Name   | Marks\n2  | Karim  | 75\n3  | Fatima | 85',
        challenge: 'Doctors দের age 30 থেকে 50 এর মধ্যে যারা আছে দেখাও।',
        icon: 'BET',
        color: 'from-yellow-500 to-orange-500',
        difficulty: 'medium'
    },
    {
        name: 'ALIAS (AS)',
        description: 'Column বা Table এর জন্য temporary নাম দিতে।\n\n📌 উপকার:\n• Query সহজ করা\n• Output এ নিজের নাম দেওয়া\n• Long names কম করা',
        descriptionBn: 'Column এর temporary নাম দিতে।',
        syntax: 'SELECT column AS alias_name\nFROM table_name;',
        example: 'SELECT Name AS StudentName, Marks AS Score\nFROM Students;',
        output: 'StudentName | Score\nRahim       | 90\nKarim       | 75',
        challenge: 'Doctors টেবিল থেকে Name কে DoctorName এবং Department কে Speciality দেখাও।',
        icon: 'AS',
        color: 'from-pink-500 to-rose-500',
        difficulty: 'easy'
    },
    {
        name: 'GROUP BY',
        description: 'একই মান অনুযায়ী rows group করতে।\n\n📌 ব্যবহার:\n• একই column value এর rows একসাথে করা\n• Aggregate functions এর সাথে ব্যবহার\n• Category wise summary পাওয়া\n• HAVING clause দিয়ে group filter করা যায়',
        descriptionBn: 'একই মান অনুযায়ী group করতে।',
        syntax: 'SELECT column, COUNT(*)\nFROM table_name\nGROUP BY column;',
        example: 'SELECT Department, COUNT(*) as count\nFROM Doctors\nGROUP BY Department;',
        output: 'Department  | count\nCardiology  | 3\nNeurology   | 2\nOrthopedics | 1',
        challenge: 'Students টেবিলে গ্রেড অনুযায়ী কতজন student আছে দেখাও।',
        icon: 'GRP',
        color: 'from-green-500 to-emerald-500',
        difficulty: 'hard'
    },
    {
        name: 'HAVING clause',
        description: 'GROUP BY এর পর condition যোগ করতে।\n\n📌 পার্থক্য:\n• WHERE - GROUP করার আগে filter\n• HAVING - GROUP করার পর filter\n• Aggregate functions HAVING এ ব্যবহার করা যায়',
        descriptionBn: 'GROUP BY এর পর condition দিতে।',
        syntax: 'SELECT column, COUNT(*)\nFROM table_name\nGROUP BY column\nHAVING COUNT(*) > value;',
        example: 'SELECT Department, COUNT(*)\nFROM Doctors\nGROUP BY Department\nHAVING COUNT(*) > 1;',
        output: 'Department  | COUNT(*)\nCardiology  | 3\nNeurology   | 2',
        challenge: 'যে বিভাগে 2 এর বেশি doctor আছে তাদের দেখাও।',
        icon: 'HAV',
        color: 'from-purple-500 to-pink-500',
        difficulty: 'hard'
    },
    {
        name: 'JOIN - INNER',
        description: 'দুটি table এর common data দেখাতে।\n\n📌 বৈশিষ্ট্য:\n• দুটি table এ থাকা data যা match করে\n• উভয় table এ থাকতে হবে\n• সবচেয়ে বেশি ব্যবহৃত JOIN',
        descriptionBn: 'দুটি table এর common data।',
        syntax: 'SELECT * FROM table1\nINNER JOIN table2\nON table1.id = table2.id;',
        example: 'SELECT Students.Name, Courses.CourseName\nFROM Students\nINNER JOIN Courses\nON Students.CourseID = Courses.ID;',
        output: 'Name   | CourseName\nRahim  | Science\nKarim  | Math',
        challenge: 'Students ও Grades table INNER JOIN করে student name ও grade দেখাও।',
        icon: 'IJ',
        color: 'from-red-500 to-pink-500',
        difficulty: 'hard'
    },
    {
        name: 'JOIN - LEFT',
        description: 'Left table এর সব row + right table এ থাকা match।\n\n📌 বৈশিষ্ট্য:\n• Left table এর সব data থাকে\n• জোড় না থাকলে NULL দেখায়\n• সব students - নিচে তাদের scores (থাকলে)',
        descriptionBn: 'Left table এর সব data + match।',
        syntax: 'SELECT * FROM table1\nLEFT JOIN table2\nON table1.id = table2.id;',
        example: 'SELECT Students.Name, Courses.CourseName\nFROM Students\nLEFT JOIN Courses\nON Students.CourseID = Courses.ID;',
        output: 'Name    | CourseName\nRahim   | Science\nKarim   | Math\nFatima  | NULL',
        challenge: 'Doctors ও PatientRecords LEFT JOIN করে সব doctors দেখাও (আন্ডারলাইন করে)।',
        icon: 'LJ',
        color: 'from-green-500 to-teal-500',
        difficulty: 'hard'
    },
    {
        name: 'JOIN - RIGHT',
        description: 'Right table এর সব row + left table এ থাকা match।\n\n📌 বৈশিষ্ট্য:\n• Right table এর সব data থাকে\n• জোড় না থাকলে NULL দেখায়\n• LEFT JOIN এর বিপরীত',
        descriptionBn: 'Right table এর সব data + match।',
        syntax: 'SELECT * FROM table1\nRIGHT JOIN table2\nON table1.id = table2.id;',
        example: 'SELECT Students.Name, Courses.CourseName\nFROM Students\nRIGHT JOIN Courses\nON Students.CourseID = Courses.ID;',
        output: 'Name    | CourseName\nRahim   | Science\nKarim   | Math\nNULL    | English',
        challenge: 'Courses ও Students RIGHT JOIN করে সব courses দেখাও।',
        icon: 'RJ',
        color: 'from-blue-500 to-cyan-500',
        difficulty: 'hard'
    },
    {
        name: 'UNION',
        description: 'দুটি query এর ফলাফল একসাথে করতে (duplicate বাদ)।\n\n📌 শর্ত:\n• একই সংখ্যক columns থাকতে হবে\n• একই data type হতে হবে\n• duplicate rows দূর করে দেয়\n• UNION ALL দিয়ে duplicate রাখা যায়',
        descriptionBn: 'দুটি query এর ফলাফল একসাথে করতে।',
        syntax: 'SELECT col1, col2 FROM table1\nUNION\nSELECT col1, col2 FROM table2;',
        example: 'SELECT Name FROM Students\nUNION\nSELECT Name FROM Teachers;',
        output: 'Name\nRahim\nKarim\nDr. Ahmed\nDr. Hana',
        challenge: 'Doctors এবং Nurses টেবিল থেকে সব নাম একসাথে দেখাও।',
        icon: 'UN',
        color: 'from-yellow-500 to-orange-500',
        difficulty: 'hard'
    },
    {
        name: 'PRIMARY KEY',
        description: 'Column কে unique ও mandatory করে দিতে।\n\n📌 বৈশিষ্ট্য:\n• প্রতিটি row unique চিহ্নিত করে\n• NULL value হতে পারে না\n• প্রতি table এ একটি মাত্র PRIMARY KEY তাকে\n• Foreign Key reference এর জন্য ব্যবহৃত হয়',
        descriptionBn: 'Row কে unique চিহ্নিত করতে।',
        syntax: 'CREATE TABLE table_name (\n   ID INT PRIMARY KEY,\n   Name VARCHAR(50)\n);',
        example: 'CREATE TABLE Students (\n   RollNo INT PRIMARY KEY,\n   Name VARCHAR(50),\n   Marks INT\n);',
        output: 'Table created with RollNo as PRIMARY KEY',
        challenge: 'Doctors টেবিল তৈরি করো DoctorID কে PRIMARY KEY করে।',
        icon: 'PK',
        color: 'from-red-500 to-orange-500',
        difficulty: 'medium'
    },
    {
        name: 'FOREIGN KEY',
        description: 'দুটি table এর সম্পর্ক তৈরি করতে।\n\n📌 কাজ:\n• অপর table এর PRIMARY KEY reference করে\n• Data integrity maintain করে\n• Parent key delete হলে child বা restrict হয়\n• Relationships তৈরি করা সম্ভব হয়',
        descriptionBn: 'দুটি table এর সম্পর্ক তৈরি করতে।',
        syntax: 'CREATE TABLE orders (\n   OrderID INT PRIMARY KEY,\n   StudentID INT,\n   FOREIGN KEY (StudentID)\n   REFERENCES students(ID)\n);',
        example: 'CREATE TABLE enrollment (\n   EnrollmentID INT PRIMARY KEY,\n   StudentID INT,\n   CourseID INT,\n   FOREIGN KEY (StudentID)\n   REFERENCES Students(ID)\n);',
        output: 'Table created with FOREIGN KEY',
        challenge: 'Enrollment টেবিল তৈরি করো StudentID কে FOREIGN KEY করে।',
        icon: 'FK',
        color: 'from-blue-500 to-indigo-500',
        difficulty: 'hard'
    }
];

// Practice Examples / Problems
const sqlExamples = [
    {
        title: 'Simple Database & Table Creation',
        problem: 'একটি নতুন database \'LibraryDB\' তৈরি করো এবং Books টেবিল তৈরি করো যার column: BookID (INT PRIMARY KEY), Title (VARCHAR 100), Author (VARCHAR 50), Price (DECIMAL 8,2)',
        difficulty: 'easy',
        code: 'CREATE DATABASE LibraryDB;\nUSE LibraryDB;\n\nCREATE TABLE Books (\n    BookID INT PRIMARY KEY AUTO_INCREMENT,\n    Title VARCHAR(100) NOT NULL,\n    Author VARCHAR(50) NOT NULL,\n    Price DECIMAL(8,2) NOT NULL\n);',
        output: 'Database LibraryDB created.\nTable Books created with BookID, Title, Author, Price columns.',
        hint: 'CREATE DATABASE দিয়ে database তৈরি করো, তারপর USE database_name দিয়ে select করো। CREATE TABLE দিয়ে column গুলো define করো।',
        explanation: 'এই query multiple SQL commands এক সাথে execute করে একটি সম্পূর্ণ library database সেটআপ করে।'
    },
    {
        title: 'Insert Multiple Records',
        problem: 'Books টেবিলে ৫টি book record insert করো বিভিন্ন authors এবং prices সহ।',
        difficulty: 'easy',
        code: 'INSERT INTO Books (Title, Author, Price) VALUES\n(\'Python Programming\', \'Mark Lutz\', 499.99),\n(\'SQL Mastery\', \'Joe Celko\', 599.99),\n(\'Database Design\', \'C.J. Date\', 549.99),\n(\'Web Development\', \'Jon Duckett\', 699.99),\n(\'JavaScript Guide\', \'Kyle Simpson\', 449.99);',
        output: '5 rows inserted successfully.',
        hint: 'একাধিক VALUES যোগ করার সময় comma দিয়ে আলাদা করো। প্রতিটি record এর জন্য নতুন (values) section।',
        explanation: 'VALUES clause এ একাধিক rows একসাথে insert করা সম্ভব যা আলাদা আলাদা INSERT এর চেয়ে দ্রুত।'
    },
    {
        title: 'Select & Filter Data',
        problem: 'Books টেবিল থেকে 500 এর উপরে দামের সব books এর Title ও Author দেখাও।',
        difficulty: 'easy',
        code: 'SELECT Title, Author, Price FROM Books\nWHERE Price > 500\nORDER BY Price DESC;',
        output: 'Title               | Author        | Price\n\'SQL Mastery\'        | Joe Celko      | 599.99\n\'Database Design\'   | C.J. Date      | 549.99\n\'Web Development\'    | Jon Duckett    | 699.99',
        hint: 'WHERE clause দিয়ে Price > 500 condition যোগ করো। ORDER BY দিয়ে descending order এ সাজাও।',
        explanation: 'SELECT এ specific columns choose করলে শুধু সেই columns data পাওয়া যায় যা efficient।'
    },
    {
        title: 'Update & Count Records',
        problem: 'Python Programming book এর price 600 এ অপডেট করো এবং total books কতটা আছে গুনো।',
        difficulty: 'medium',
        code: 'UPDATE Books SET Price = 600\nWHERE Title = \'Python Programming\';\n\nSELECT COUNT(*) as TotalBooks FROM Books;',
        output: 'Price updated successfully.\nTotalBooks: 5',
        hint: 'UPDATE এ WHERE clause দিতে ভুলবেন না নাহলে সব price update হবে। COUNT(*) দিয়ে total rows গুনো।',
        explanation: 'UPDATE করার সময় WHERE condition খুবই গুরুত্বপূর্ণ কারণ এটা specify করে কোন rows update হবে।'
    },
    {
        title: 'Group By & Aggregate Functions',
        problem: 'Author এর নামে group করে প্রতিটি author এর মোট books count এবং average price দেখাও।',
        difficulty: 'medium',
        code: 'SELECT Author, COUNT(*) as BookCount, AVG(Price) as AvgPrice\nFROM Books\nGROUP BY Author\nORDER BY BookCount DESC;',
        output: 'Author         | BookCount | AvgPrice\nMark Lutz      | 1         | 600.00\nJoe Celko      | 1         | 599.99\nC.J. Date      | 1         | 549.99\nJon Duckett    | 1         | 699.99\nKyle Simpson   | 1         | 449.99',
        hint: 'GROUP BY Author দিয়ে same author books group করো। COUNT(*) এবং AVG(Price) দিয়ে aggregate data পাও।',
        explanation: 'GROUP BY একই author এর সব books একসাথে করে, তারপর aggregate functions প্রয়োগ করা হয়।'
    },
    {
        title: 'Delete & Verify',
        problem: '450 এর কম দামের books delete করো এবং delete এর পর remaining books দেখাও।',
        difficulty: 'medium',
        code: 'DELETE FROM Books WHERE Price < 450;\n\nSELECT * FROM Books ORDER BY Price;',
        output: 'JavaScript Guide deleted.\n\nBookID | Title            | Author      | Price\n1      | Python Programming | Mark Lutz   | 600.00\n2      | SQL Mastery        | Joe Celko   | 599.99\n3      | Database Design    | C.J. Date   | 549.99\n4      | Web Development    | Jon Duckett | 699.99',
        hint: 'DELETE করার আগে কোন books delete হবে তা যাচাই করো। DELETE এর পর SELECT করে verify করো।',
        explanation: 'DELETE irreversible operation তাই সাবধানে WHERE condition লিখতে হবে।'
    },
    {
        title: 'Distinct & Sorting',
        problem: 'সব unique authors এর নাম alphabetically sort করে দেখাও।',
        difficulty: 'medium',
        code: 'SELECT DISTINCT Author FROM Books\nORDER BY Author ASC;',
        output: 'Author\nC.J. Date\nJoe Celko\nJon Duckett\nKyle Simpson\nMark Lutz',
        hint: 'DISTINCT দিয়ে duplicate authors remove করো। ORDER BY ASC দিয়ে alphabetically sort করো।',
        explanation: 'DISTINCT duplicate rows remove করে যাতে unique values পাওয়া যায়।'
    },
    {
        title: 'Multiple Conditions',
        problem: '500-600 টাকার মধ্যে দামের এবং Jon বা Kyle লেখা Author এর books দেখাও।',
        difficulty: 'hard',
        code: 'SELECT * FROM Books\nWHERE (Price BETWEEN 500 AND 600)\nAND (Author LIKE \'%Jon%\' OR Author LIKE \'%Kyle%\');',
        output: 'BookID | Title              | Author      | Price\n4      | Web Development    | Jon Duckett | 699.99\n(Kyle Simpson এর book 500 এর বেশি নয়)',
        hint: 'BETWEEN দিয়ে price range check করো। LIKE দিয়ে multiple authors check করো AND OR মিলিয়ে।',
        explanation: 'একাধিক conditions এর জন্য parentheses ব্যবহার করা logical clarity এর জন্য গুরুত্বপূর্ণ।'
    },
    {
        title: 'Practice Challenge - Full CRUD',
        problem: 'Students টেবিল তৈরি করো (StudentID, Name, Department, GPA)। 3টি student insert করো। একজন student এর department change করো। সব students এর average GPA বের করো।',
        difficulty: 'hard',
        code: 'CREATE TABLE Students (\n    StudentID INT PRIMARY KEY AUTO_INCREMENT,\n    Name VARCHAR(50) NOT NULL,\n    Department VARCHAR(50),\n    GPA DECIMAL(3,2)\n);\n\nINSERT INTO Students (Name, Department, GPA) VALUES\n(\'Alice Khan\', \'CSE\', 3.95),\n(\'Bob Ahmed\', \'EEE\', 3.75),\n(\'Carol Singh\', \'CSE\', 3.85);\n\nUPDATE Students SET Department = \'BBA\' WHERE Name = \'Bob Ahmed\';\n\nSELECT AVG(GPA) as AverageGPA FROM Students;',
        output: 'Table Students created.\n3 students inserted.\nBob Ahmed department updated to BBA.\nAverageGPA: 3.8500',
        hint: 'CRUD operations: Create (CREATE TABLE), Read (SELECT), Update (UPDATE), Delete (DELETE)। প্রতিটি অপারেশন step by step করো।',
        explanation: 'এটি একটি সম্পূর্ণ database operation যা CREATE, INSERT, UPDATE এবং SELECT সব এক সাথে ব্যবহার করে।'
    }
];

// Render concepts to page
function renderConcepts() {
    const grid = document.getElementById('conceptGrid');
    grid.innerHTML = '';

    sqlConcepts.forEach(concept => {
        const card = document.createElement('div');
        card.className = `group bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl p-4 sm:p-6 border border-slate-800 hover:border-fuchsia-500/50 cursor-pointer transition-all transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-500/10 active:scale-95`;
        card.onclick = () => showConceptModal(concept);

        card.innerHTML = `
            <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-gradient-to-br ${concept.color} rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-sm text-center">${concept.icon}</span>
                </div>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white mb-2">${concept.name}</h3>
            <p class="text-slate-400 text-sm mb-3 line-clamp-2">${concept.descriptionBn || concept.description}</p>
            <div class="flex items-center justify-between">
                <span class="text-xs px-2 py-1 rounded-full ${getDifficultyColor(concept.difficulty)}">${getDifficultyText(concept.difficulty)}</span>
                <span class="text-fuchsia-400 group-hover:translate-x-2 transition-transform">→</span>
            </div>
        `;

        grid.appendChild(card);
    });
}

// Render examples
function renderExamples(filter = 'all') {
    const grid = document.getElementById('examplesGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? sqlExamples : sqlExamples.filter(ex => ex.difficulty === filter);

    filtered.forEach((example, index) => {
        const card = document.createElement('div');
        card.className = `group bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg p-4 border border-slate-800 hover:border-fuchsia-500/50 cursor-pointer transition-all transform hover:scale-[1.02] hover:shadow-xl hover:shadow-fuchsia-500/10`;
        card.onclick = () => showExampleModal(example);

        card.innerHTML = `
            <div class="flex items-start justify-between mb-3">
                <span class="text-xs px-2 py-1 rounded-full ${getDifficultyColor(example.difficulty)}">${getDifficultyText(example.difficulty)}</span>
                <span class="text-lg">${getDifficultyEmoji(example.difficulty)}</span>
            </div>
            <h3 class="text-base font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">${example.title}</h3>
            <p class="text-sm text-slate-400 line-clamp-2">${example.problem}</p>
        `;

        grid.appendChild(card);
    });
}

// Modal Functions
function showConceptModal(concept) {
    const modal = document.getElementById('conceptModal');
    document.getElementById('modalConceptName').textContent = concept.name;
    document.getElementById('modalDescription').textContent = concept.description;
    document.getElementById('modalSyntax').textContent = concept.syntax;
    document.getElementById('modalExample').textContent = concept.example;
    document.getElementById('modalOutput').textContent = concept.output;
    document.getElementById('modalChallenge').textContent = concept.challenge;
    document.getElementById('practiceResult').textContent = 'এটি একটি practice challenge। আপনার সমাধান এখানে appear করবে।';

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    setupModalCloseButton();
}

function showExampleModal(example) {
    const modal = document.getElementById('exampleModal');
    
    document.getElementById('exampleTitle').textContent = example.title;
    document.getElementById('exampleDifficulty').innerHTML = `
        <span class="${getDifficultyColor(example.difficulty)} text-xs px-3 py-1 rounded-full">
            ${getDifficultyEmoji(example.difficulty)} ${getDifficultyText(example.difficulty)}
        </span>
    `;
    
    document.getElementById('exampleProblem').textContent = example.problem;
    document.getElementById('exampleHintText').textContent = example.hint;
    document.getElementById('exampleCode').textContent = example.code;
    document.getElementById('exampleOutput').textContent = example.output;
    document.getElementById('exampleExplanation').textContent = example.explanation;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.getElementById('closeModal').onclick = closeExampleModal;
}

function closeExampleModal() {
    const modal = document.getElementById('exampleModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function toggleExampleHint() {
    const hintBox = document.getElementById('exampleHint');
    hintBox.classList.toggle('hidden');
}

function toggleExampleSolution() {
    const solutionBox = document.getElementById('exampleSolution');
    solutionBox.classList.toggle('hidden');
}

function setupModalCloseButton() {
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('conceptModal');
    
    closeBtn.onclick = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    };
}

function filterExamples(difficulty) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === difficulty);
        if (btn.dataset.filter === difficulty) {
            btn.className = btn.className.replace('bg-slate-800', 'bg-fuchsia-500/20').replace('text-slate-400', 'text-fuchsia-400').replace('border-slate-700', 'border-fuchsia-500/50');
        } else {
            btn.className = btn.className.replace('bg-fuchsia-500/20', 'bg-slate-800').replace('text-fuchsia-400', 'text-slate-400').replace('border-fuchsia-500/50', 'border-slate-700');
        }
    });
    
    renderExamples(difficulty);
}

function getDifficultyColor(difficulty) {
    const colors = {
        'easy': 'bg-green-500/10 text-green-400 border border-green-500/30',
        'medium': 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
        'hard': 'bg-red-500/10 text-red-400 border border-red-500/30'
    };
    return colors[difficulty] || colors['easy'];
}

function getDifficultyText(difficulty) {
    const texts = {
        'easy': 'সহজ',
        'medium': 'মাঝারি',
        'hard': 'কঠিন'
    };
    return texts[difficulty] || 'সহজ';
}

function getDifficultyEmoji(difficulty) {
    const emojis = {
        'easy': '🟢',
        'medium': '🟡',
        'hard': '🔴'
    };
    return emojis[difficulty] || '🟢';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderConcepts();
    renderExamples('all');
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}
