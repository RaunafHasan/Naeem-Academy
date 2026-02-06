// C Programming Concepts Database
const cConcepts = [
    {
        name: 'Variables',
        description: 'Variables are containers for storing data values. In C, you must declare variables with a specific data type before using them.',
        descriptionBn: 'ভেরিয়েবল হলো ডেটা সংরক্ষণের জন্য কন্টেইনার। C তে, ভেরিয়েবল ব্যবহার করার আগে অবশ্যই একটি নির্দিষ্ট ডেটা টাইপ দিয়ে ঘোষণা করতে হবে।',
        syntax: 'data_type variable_name = value;',
        example: '#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float height = 5.9;\n    char grade = \'A\';\n    \n    printf("Age: %d\\n", age);\n    printf("Height: %.1f\\n", height);\n    printf("Grade: %c\\n", grade);\n    return 0;\n}',
        output: 'Age: 25\nHeight: 5.9\nGrade: A',
        challenge: 'Declare three variables: an integer for year, a float for price, and a char for initial',
        hint: 'Use int for whole numbers, float for decimals, and char for single characters',
        icon: 'VAR',
        color: 'from-purple-500 to-pink-500',
        difficulty: 'easy'
    },
    {
        name: 'printf()',
        description: 'The printf() function is used to print formatted output to the console. It is one of the most commonly used functions in C programming.',
        descriptionBn: 'printf() ফাংশন কনসোলে ফরম্যাটেড আউটপুট প্রিন্ট করতে ব্যবহৃত হয়। এটি C প্রোগ্রামিং-এ সবচেয়ে বেশি ব্যবহৃত ফাংশনগুলোর একটি।',
        syntax: 'printf("format string", arguments);',
        example: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    printf("My age is %d\\n", 25);\n    return 0;\n}',
        output: 'Hello, World!\nMy age is 25',
        challenge: 'Write a program that prints your name and age using printf()',
        hint: 'Use printf("My name is ...") for the name and printf("I am %d years old", age) for age',
        icon: 'PF',
        color: 'from-blue-500 to-cyan-500',
        difficulty: 'easy'
    },
    {
        name: 'scanf()',
        description: 'The scanf() function is used to read formatted input from the user via the keyboard. It stores the input in variables using their memory addresses.',
        descriptionBn: 'scanf() ফাংশন কীবোর্ডের মাধ্যমে ব্যবহারকারীর কাছ থেকে ফরম্যাটেড ইনপুট পড়তে ব্যবহৃত হয়। এটি মেমরি অ্যাড্রেস ব্যবহার করে ভেরিয়েবলে ইনপুট সংরক্ষণ করে।',
        syntax: 'scanf("format specifier", &variable);',
        example: '#include <stdio.h>\n\nint main() {\n    int age;\n    float height;\n    \n    printf("Enter your age: ");\n    scanf("%d", &age);\n    \n    printf("Enter your height: ");\n    scanf("%f", &height);\n    \n    printf("Age: %d, Height: %.2f\\n", age, height);\n    return 0;\n}',
        output: 'Enter your age: 25\nEnter your height: 5.9\nAge: 25, Height: 5.90',
        challenge: 'Write a program that asks the user for two numbers and prints their sum',
        hint: 'Use scanf("%d", &num1) to read each number, then print num1 + num2',
        icon: 'SCN',
        color: 'from-cyan-500 to-blue-500',
        difficulty: 'easy'
    },
    {
        name: 'if-else',
        description: 'The if-else statement allows you to execute different blocks of code based on conditions. It is fundamental for decision-making in programs.',
        descriptionBn: 'if-else স্টেটমেন্ট শর্তের উপর ভিত্তি করে বিভিন্ন কোড ব্লক চালাতে দেয়। এটি প্রোগ্রামে সিদ্ধান্ত নেওয়ার জন্য মৌলিক।',
        syntax: 'if (condition) {\n    // code if true\n} else {\n    // code if false\n}',
        example: '#include <stdio.h>\n\nint main() {\n    int age = 18;\n    \n    if (age >= 18) {\n        printf("You are an adult\\n");\n    } else {\n        printf("You are a minor\\n");\n    }\n    return 0;\n}',
        output: 'You are an adult',
        challenge: 'Write a program that checks if a number is positive, negative, or zero',
        hint: 'Use if (num > 0), else if (num < 0), and else for three conditions',
        icon: 'IF',
        color: 'from-emerald-500 to-teal-500',
        difficulty: 'easy'
    },
    {
        name: 'if - else if',
        description: 'The if-else if ladder allows you to check multiple conditions in sequence. Each condition is evaluated in order until one is true.',
        descriptionBn: 'if-else if ল্যাডার আপনাকে ক্রমানুসারে একাধিক শর্ত পরীক্ষা করতে দেয়। প্রতিটি শর্ত ক্রমানুসারে মূল্যায়ন করা হয় যতক্ষণ না একটি সত্য হয়।',
        syntax: 'if (condition1) {\n    // code if condition1 is true\n} else if (condition2) {\n    // code if condition2 is true\n} else {\n    // code if all conditions are false\n}',
        example: '#include <stdio.h>\n\nint main() {\n    int score = 85;\n    \n    if (score >= 90) {\n        printf("Grade: A\\n");\n    } else if (score >= 80) {\n        printf("Grade: B\\n");\n    } else if (score >= 70) {\n        printf("Grade: C\\n");\n    } else {\n        printf("Grade: F\\n");\n    }\n    return 0;\n}',
        output: 'Grade: B',
        challenge: 'Write a program that checks if a number is positive, negative, or zero using if-else if',
        hint: 'Use if (num > 0) for positive, else if (num < 0) for negative, else for zero',
        icon: 'EIF',
        color: 'from-violet-500 to-purple-500',
        difficulty: 'easy'
    },
    {
        name: 'for Loop',
        description: 'The for loop is used to repeat a block of code a specific number of times. It\'s perfect when you know how many iterations you need.',
        descriptionBn: 'for লুপ একটি নির্দিষ্ট সংখ্যক বার কোড ব্লক পুনরাবৃত্তি করতে ব্যবহৃত হয়। আপনি যখন জানেন কতবার পুনরাবৃত্তি প্রয়োজন তখন এটি উপযুক্ত।',
        syntax: 'for (initialization; condition; increment) {\n    // code to repeat\n}',
        example: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 5; i++) {\n        printf("Count: %d\\n", i);\n    }\n    return 0;\n}',
        output: 'Count: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5',
        challenge: 'Write a for loop that prints even numbers from 2 to 10',
        hint: 'Start with i = 2 and increment by 2 each time (i += 2)',
        icon: 'FOR',
        color: 'from-orange-500 to-red-500',
        difficulty: 'medium'
    },
    {
        name: 'while Loop',
        description: 'The while loop repeats a block of code as long as a condition is true. Use it when you don\'t know the exact number of iterations.',
        descriptionBn: 'while লুপ একটি শর্ত সত্য থাকা পর্যন্ত কোড ব্লক পুনরাবৃত্তি করে। যখন আপনি সঠিক পুনরাবৃত্তির সংখ্যা জানেন না তখন এটি ব্যবহার করুন।',
        syntax: 'while (condition) {\n    // code to repeat\n}',
        example: '#include <stdio.h>\n\nint main() {\n    int count = 1;\n    \n    while (count <= 3) {\n        printf("Loop %d\\n", count);\n        count++;\n    }\n    return 0;\n}',
        output: 'Loop 1\nLoop 2\nLoop 3',
        challenge: 'Use a while loop to print numbers from 5 down to 1',
        hint: 'Start with int i = 5; and use while (i >= 1), then decrement i--',
        icon: 'WHL',
        color: 'from-yellow-500 to-orange-500',
        difficulty: 'medium'
    },
    {
        name: 'Arrays',
        description: 'Arrays store multiple values of the same type in a single variable. Elements are accessed using index numbers starting from 0.',
        descriptionBn: 'অ্যারে একই টাইপের একাধিক মান একটি ভেরিয়েবলে সংরক্ষণ করে। এলিমেন্টগুলো ০ থেকে শুরু হওয়া ইনডেক্স নম্বর ব্যবহার করে অ্যাক্সেস করা হয়।',
        syntax: 'data_type array_name[size];',
        example: '#include <stdio.h>\n\nint main() {\n    int numbers[5] = {10, 20, 30, 40, 50};\n    \n    printf("First: %d\\n", numbers[0]);\n    printf("Third: %d\\n", numbers[2]);\n    return 0;\n}',
        output: 'First: 10\nThird: 30',
        challenge: 'Create an array of 4 grades and print the second grade',
        hint: 'Declare: int grades[4] = {85, 90, 78, 92}; Access with grades[1]',
        icon: 'ARR',
        color: 'from-indigo-500 to-purple-500',
        difficulty: 'medium'
    },
    {
        name: 'Functions',
        description: 'Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.',
        descriptionBn: 'ফাংশন হলো পুনঃব্যবহারযোগ্য কোড ব্লক যা নির্দিষ্ট কাজ সম্পাদন করে। এগুলো কোড সংগঠিত করতে এবং পুনরাবৃত্তি এড়াতে সাহায্য করে।',
        syntax: 'return_type function_name(parameters) {\n    // code\n    return value;\n}',
        example: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = add(5, 3);\n    printf("Sum: %d\\n", result);\n    return 0;\n}',
        output: 'Sum: 8',
        challenge: 'Create a function that multiplies two numbers and returns the result',
        hint: 'Define: int multiply(int x, int y) { return x * y; }',
        icon: 'FN',
        color: 'from-pink-500 to-rose-500',
        difficulty: 'hard'
    },
    {
        name: 'Pointers',
        description: 'Pointers are variables that store memory addresses. They are powerful tools for memory management and dynamic data structures.',
        descriptionBn: 'পয়েন্টার হলো ভেরিয়েবল যা মেমরি অ্যাড্রেস সংরক্ষণ করে। এগুলো মেমরি ম্যানেজমেন্ট এবং ডায়নামিক ডেটা স্ট্রাকচারের জন্য শক্তিশালী টুল।',
        syntax: 'data_type *pointer_name;',
        example: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    int *ptr = &num;\n    \n    printf("Value: %d\\n", num);\n    printf("Address: %p\\n", ptr);\n    printf("Value via pointer: %d\\n", *ptr);\n    return 0;\n}',
        output: 'Value: 42\nAddress: 0x7ffd5e8a6c4c\nValue via pointer: 42',
        challenge: 'Declare a pointer to an integer variable and print both the value and address',
        hint: 'Use int *ptr = &variable; then *ptr for value and ptr for address',
        icon: 'PTR',
        color: 'from-red-500 to-orange-500',
        difficulty: 'hard'
    }
];

// Practice Examples Database (Bangla)
const practiceExamples = [
    {
        id: 1,
        title: 'নাম প্রিন্ট করুন',
        problem: 'একটি প্রোগ্রাম লিখুন যেটি আপনার নাম স্ক্রিনে প্রিন্ট করবে।',
        hint: 'printf() ফাংশন ব্যবহার করুন এবং ডাবল কোটেশনের মধ্যে আপনার নাম লিখুন।',
        concept: 'printf()',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    printf("আমার নাম রহিম\\n");\n    return 0;\n}',
        output: 'আমার নাম রহিম',
        explanation: 'printf() ফাংশন কনসোলে টেক্সট প্রিন্ট করে। \\n দিয়ে নতুন লাইনে যায়।'
    },
    {
        id: 2,
        title: 'দুইটি সংখ্যার যোগফল',
        problem: 'দুইটি সংখ্যা ইনপুট নিয়ে তাদের যোগফল প্রিন্ট করুন।',
        hint: 'scanf() দিয়ে ইনপুট নিন এবং যোগফল বের করুন।',
        concept: 'scanf()',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("দুইটি সংখ্যা দিন: ");\n    scanf("%d %d", &a, &b);\n    printf("যোগফল: %d\\n", a + b);\n    return 0;\n}',
        output: 'দুইটি সংখ্যা দিন: 5 7\nযোগফল: 12',
        explanation: 'scanf() দিয়ে ইনপুট নিয়ে যোগফল বের করা হয়েছে।'
    },
    // Basic Input–Output & Syntax
    {
        id: 16,
        title: 'দুইটি সংখ্যার যোগ, বিয়োগ, গুণ, ভাগ নির্ণয়',
        problem: 'দুইটি পূর্ণসংখ্যা ইনপুট নিয়ে তাদের যোগ, বিয়োগ, গুণ, ভাগ নির্ণয় করুন।',
        hint: 'scanf() দিয়ে ইনপুট নিন, +, -, *, / অপারেটর ব্যবহার করুন।',
        concept: 'Basic Input–Output',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("দুইটি সংখ্যা দিন: ");\n    scanf("%d %d", &a, &b);\n    printf("যোগ: %d\\n", a + b);\n    printf("বিয়োগ: %d\\n", a - b);\n    printf("গুণ: %d\\n", a * b);\n    printf("ভাগ: %.2f\\n", (float)a / b);\n    return 0;\n}',
        output: 'দুইটি সংখ্যা দিন: 8 2\nযোগ: 10\nবিয়োগ: 6\nগুণ: 16\nভাগ: 4.00',
        explanation: '+, -, *, / অপারেটর ব্যবহার করে চারটি গাণিতিক অপারেশন করা হয়েছে।'
    },
    {
        id: 17,
        title: 'তাপমাত্রা (C→F, F→C) রূপান্তর',
        problem: 'সেলসিয়াস থেকে ফারেনহাইট এবং ফারেনহাইট থেকে সেলসিয়াস রূপান্তর করুন।',
        hint: 'C→F: F = C * 9/5 + 32, F→C: C = (F - 32) * 5/9',
        concept: 'Basic Input–Output',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    float c, f;\n    printf("Celsius দিন: ");\n    scanf("%f", &c);\n    f = c * 9/5 + 32;\n    printf("Fahrenheit: %.2f\\n", f);\n    printf("Fahrenheit দিন: ");\n    scanf("%f", &f);\n    c = (f - 32) * 5/9;\n    printf("Celsius: %.2f\\n", c);\n    return 0;\n}',
        output: 'Celsius দিন: 100\nFahrenheit: 212.00\nFahrenheit দিন: 32\nCelsius: 0.00',
        explanation: 'C→F ও F→C রূপান্তরের সূত্র ব্যবহার করা হয়েছে।'
    },
    {
        id: 18,
        title: 'বৃত্তের ক্ষেত্রফল ও পরিধি',
        problem: 'ব্যবহারকারীর দেওয়া রেডিয়াস দিয়ে বৃত্তের ক্ষেত্রফল ও পরিধি নির্ণয় করুন।',
        hint: 'π = 3.1416, ক্ষেত্রফল: πr^2, পরিধি: 2πr',
        concept: 'Basic Input–Output',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n#define PI 3.1416\n\nint main() {\n    float r;\n    printf("রেডিয়াস দিন: ");\n    scanf("%f", &r);\n    printf("ক্ষেত্রফল: %.2f\\n", PI*r*r);\n    printf("পরিধি: %.2f\\n", 2*PI*r);\n    return 0;\n}',
        output: 'রেডিয়াস দিন: 5\nক্ষেত্রফল: 78.54\nপরিধি: 31.42',
        explanation: 'πr^2 ও 2πr সূত্র ব্যবহার করা হয়েছে।'
    },
    {
        id: 19,
        title: 'আয়তক্ষেত্রের ক্ষেত্রফল',
        problem: 'দৈর্ঘ্য ও প্রস্থ ইনপুট নিয়ে আয়তক্ষেত্রের ক্ষেত্রফল নির্ণয় করুন।',
        hint: 'ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ',
        concept: 'Basic Input–Output',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    float l, w;\n    printf("দৈর্ঘ্য দিন: ");\n    scanf("%f", &l);\n    printf("প্রস্থ দিন: ");\n    scanf("%f", &w);\n    printf("ক্ষেত্রফল: %.2f\\n", l*w);\n    return 0;\n}',
        output: 'দৈর্ঘ্য দিন: 8\nপ্রস্থ দিন: 5\nক্ষেত্রফল: 40.00',
        explanation: 'ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ সূত্র ব্যবহার করা হয়েছে।'
    },
    {
        id: 20,
        title: 'Simple & Compound Interest',
        problem: 'Principal, rate ও time ইনপুট নিয়ে সরল ও চক্রবৃদ্ধি সুদ নির্ণয় করুন।',
        hint: 'Simple: SI = PRT/100, Compound: CI = P(1+R/100)^T - P',
        concept: 'Basic Input–Output',
        difficulty: 'medium',
        solution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float p, r, t, si, ci;\n    printf("Principal, Rate, Time দিন: ");\n    scanf("%f %f %f", &p, &r, &t);\n    si = (p*r*t)/100;\n    ci = p * pow(1 + r/100, t) - p;\n    printf("Simple Interest: %.2f\\n", si);\n    printf("Compound Interest: %.2f\\n", ci);\n    return 0;\n}',
        output: 'Principal, Rate, Time দিন: 1000 5 2\nSimple Interest: 100.00\nCompound Interest: 102.50',
        explanation: 'সরল ও চক্রবৃদ্ধি সুদের সূত্র ব্যবহার করা হয়েছে।'
    },
    {
        id: 21,
        title: 'সেকেন্ড → ঘণ্টা:মিনিট:সেকেন্ড',
        problem: 'একটি সেকেন্ড ইনপুট নিয়ে ঘণ্টা, মিনিট ও সেকেন্ডে রূপান্তর করুন।',
        hint: 'ঘণ্টা = total/3600, মিনিট = (total%3600)/60, সেকেন্ড = total%60',
        concept: 'Basic Input–Output',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    int total, h, m, s;\n    printf("সেকেন্ড দিন: ");\n    scanf("%d", &total);\n    h = total / 3600;\n    m = (total % 3600) / 60;\n    s = total % 60;\n    printf("%d:%d:%d\\n", h, m, s);\n    return 0;\n}',
        output: 'সেকেন্ড দিন: 3665\n1:1:5',
        explanation: 'ঘণ্টা, মিনিট, সেকেন্ডে রূপান্তরের সূত্র ব্যবহার করা হয়েছে।'
    },
    {
        id: 3,
        title: 'ব্যবহারকারীর ইনপুট নিন',
        problem: 'ব্যবহারকারীর কাছ থেকে একটি সংখ্যা নিন এবং সেটি দ্বিগুণ করে প্রিন্ট করুন।',
        hint: 'scanf("%d", &num) দিয়ে ইনপুট নিন।',
        concept: 'scanf()',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("একটি সংখ্যা দিন: ");\n    scanf("%d", &num);\n    \n    printf("দ্বিগুণ: %d\\n", num * 2);\n    return 0;\n}',
        output: 'একটি সংখ্যা দিন: 5\nদ্বিগুণ: 10',
        explanation: 'scanf() দিয়ে কীবোর্ড থেকে ইনপুট নেওয়া হয়।'
    },
    {
        id: 4,
        title: 'জোড়/বিজোড় চেক করুন',
        problem: 'একটি সংখ্যা জোড় না বিজোড় সেটি চেক করে প্রিন্ট করুন।',
        hint: 'num % 2 == 0 হলে জোড়।',
        concept: 'if-else',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("একটি সংখ্যা দিন: ");\n    scanf("%d", &num);\n    \n    if (num % 2 == 0) {\n        printf("%d একটি জোড় সংখ্যা\\n", num);\n    } else {\n        printf("%d একটি বিজোড় সংখ্যা\\n", num);\n    }\n    return 0;\n}',
        output: 'একটি সংখ্যা দিন: 7\n7 একটি বিজোড় সংখ্যা',
        explanation: '% অপারেটর ভাগশেষ বের করে।'
    },
    {
        id: 5,
        title: 'গ্রেড নির্ণয় করুন',
        problem: 'নম্বর অনুযায়ী গ্রেড দিন: ৮০+ = A, ৬০+ = B, ৪০+ = C, বাকি = F',
        hint: 'if-else if-else ব্যবহার করুন।',
        concept: 'if - else if',
        difficulty: 'easy',
        solution: '#include <stdio.h>\n\nint main() {\n    int marks;\n    \n    printf("নম্বর দিন: ");\n    scanf("%d", &marks);\n    \n    if (marks >= 80) {\n        printf("গ্রেড: A\\n");\n    } else if (marks >= 60) {\n        printf("গ্রেড: B\\n");\n    } else if (marks >= 40) {\n        printf("গ্রেড: C\\n");\n    } else {\n        printf("গ্রেড: F\\n");\n    }\n    return 0;\n}',
        output: 'নম্বর দিন: 75\nগ্রেড: B',
        explanation: 'if-else if ladder ব্যবহার করে একাধিক শর্ত ক্রমানুসারে চেক করা হয়।'
    },
    {
        id: 6,
        title: '১ থেকে ১০ পর্যন্ত প্রিন্ট',
        problem: 'for loop ব্যবহার করে ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করুন।',
        hint: 'for (int i = 1; i <= 10; i++) এভাবে লুপ লিখুন।',
        concept: 'for Loop',
        difficulty: 'medium',
        solution: '#include <stdio.h>\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    return 0;\n}',
        output: '1 2 3 4 5 6 7 8 9 10',
        explanation: 'for লুপে i=1 থেকে শুরু, i<=10 পর্যন্ত চলে।'
    },
    {
        id: 7,
        title: 'গুণের টেবিল',
        problem: 'ব্যবহারকারীর দেওয়া সংখ্যার ১ থেকে ১০ পর্যন্ত গুণের টেবিল প্রিন্ট করুন।',
        hint: 'একটি for loop ব্যবহার করুন।',
        concept: 'for Loop',
        difficulty: 'medium',
        solution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("সংখ্যা দিন: ");\n    scanf("%d", &num);\n    \n    printf("%d এর গুণের টেবিল:\\n", num);\n    for (int i = 1; i <= 10; i++) {\n        printf("%d x %d = %d\\n", num, i, num * i);\n    }\n    return 0;\n}',
        output: 'সংখ্যা দিন: 5\n5 এর গুণের টেবিল:\n5 x 1 = 5\n...\n5 x 10 = 50',
        explanation: 'প্রতিটি iteration এ i এর মান পরিবর্তন হয়।'
    },
    {
        id: 8,
        title: 'সংখ্যার যোগফল (while)',
        problem: 'while loop ব্যবহার করে ১ থেকে n পর্যন্ত সংখ্যার যোগফল বের করুন।',
        hint: 'একটি sum ভেরিয়েবল রাখুন।',
        concept: 'while Loop',
        difficulty: 'medium',
        solution: '#include <stdio.h>\n\nint main() {\n    int n, sum = 0, i = 1;\n    \n    printf("n এর মান দিন: ");\n    scanf("%d", &n);\n    \n    while (i <= n) {\n        sum = sum + i;\n        i++;\n    }\n    \n    printf("১ থেকে %d পর্যন্ত যোগফল: %d\\n", n, sum);\n    return 0;\n}',
        output: 'n এর মান দিন: 5\n১ থেকে 5 পর্যন্ত যোগফল: 15',
        explanation: 'while লুপ শর্ত সত্য থাকা পর্যন্ত চলে।'
    },
    {
        id: 9,
        title: 'অ্যারেতে ৫টি সংখ্যা',
        problem: 'একটি অ্যারেতে ৫টি সংখ্যা রাখুন এবং সবগুলো প্রিন্ট করুন।',
        hint: 'int arr[5] = {1, 2, 3, 4, 5}; এভাবে অ্যারে তৈরি করুন।',
        concept: 'Arrays',
        difficulty: 'medium',
        solution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    \n    printf("অ্যারের উপাদানগুলো:\\n");\n    for (int i = 0; i < 5; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n    return 0;\n}',
        output: 'অ্যারের উপাদানগুলো:\narr[0] = 10\narr[1] = 20\narr[2] = 30\narr[3] = 40\narr[4] = 50',
        explanation: 'অ্যারের ইনডেক্স 0 থেকে শুরু হয়।'
    },
    {
        id: 10,
        title: 'অ্যারের সর্বোচ্চ মান',
        problem: 'একটি অ্যারে থেকে সবচেয়ে বড় সংখ্যাটি খুঁজে বের করুন।',
        hint: 'প্রথম উপাদানকে max ধরুন।',
        concept: 'Arrays',
        difficulty: 'medium',
        solution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {45, 12, 89, 34, 67};\n    int max = arr[0];\n    \n    for (int i = 1; i < 5; i++) {\n        if (arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    \n    printf("সর্বোচ্চ মান: %d\\n", max);\n    return 0;\n}',
        output: 'সর্বোচ্চ মান: 89',
        explanation: 'প্রতিটি উপাদান max এর সাথে তুলনা করে।'
    },
    {
        id: 11,
        title: 'যোগফল ফাংশন',
        problem: 'একটি ফাংশন লিখুন যেটি দুটি সংখ্যার যোগফল রিটার্ন করবে।',
        hint: 'int add(int a, int b) { return a + b; }',
        concept: 'Functions',
        difficulty: 'hard',
        solution: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int x = 15, y = 25;\n    int result = add(x, y);\n    \n    printf("%d + %d = %d\\n", x, y, result);\n    return 0;\n}',
        output: '15 + 25 = 40',
        explanation: 'ফাংশন দুটি প্যারামিটার নেয় এবং তাদের যোগফল return করে।'
    },
    {
        id: 12,
        title: 'ফ্যাক্টোরিয়াল ফাংশন',
        problem: 'একটি ফাংশন লিখুন যেটি n! (ফ্যাক্টোরিয়াল) হিসাব করবে।',
        hint: 'n! = n × (n-1) × (n-2) × ... × 1',
        concept: 'Functions',
        difficulty: 'hard',
        solution: '#include <stdio.h>\n\nint factorial(int n) {\n    int result = 1;\n    for (int i = 1; i <= n; i++) {\n        result = result * i;\n    }\n    return result;\n}\n\nint main() {\n    int num;\n    \n    printf("সংখ্যা দিন: ");\n    scanf("%d", &num);\n    \n    printf("%d! = %d\\n", num, factorial(num));\n    return 0;\n}',
        output: 'সংখ্যা দিন: 5\n5! = 120',
        explanation: 'factorial ফাংশন 1 থেকে n পর্যন্ত সব সংখ্যা গুণ করে।'
    },
    {
        id: 13,
        title: 'পয়েন্টার দিয়ে মান পরিবর্তন',
        problem: 'পয়েন্টার ব্যবহার করে একটি ভেরিয়েবলের মান পরিবর্তন করুন।',
        hint: 'int *ptr = &num; এভাবে পয়েন্টার তৈরি করুন।',
        concept: 'Pointers',
        difficulty: 'hard',
        solution: '#include <stdio.h>\n\nint main() {\n    int num = 10;\n    int *ptr = &num;\n    \n    printf("আগের মান: %d\\n", num);\n    \n    *ptr = 50;\n    \n    printf("পরের মান: %d\\n", num);\n    return 0;\n}',
        output: 'আগের মান: 10\nপরের মান: 50',
        explanation: 'ptr num এর অ্যাড্রেস ধরে রাখে।'
    },
    {
        id: 14,
        title: 'দুটি সংখ্যা অদলবদল (Swap)',
        problem: 'পয়েন্টার ব্যবহার করে দুটি সংখ্যা swap করার ফাংশন লিখুন।',
        hint: 'void swap(int *a, int *b) ফাংশন তৈরি করুন।',
        concept: 'Pointers',
        difficulty: 'hard',
        solution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    \n    printf("আগে: x = %d, y = %d\\n", x, y);\n    \n    swap(&x, &y);\n    \n    printf("পরে: x = %d, y = %d\\n", x, y);\n    return 0;\n}',
        output: 'আগে: x = 5, y = 10\nপরে: x = 10, y = 5',
        explanation: 'পয়েন্টার দিয়ে ফাংশনে ভেরিয়েবলের অ্যাড্রেস পাঠানো হয়।'
    },
    {
        id: 15,
        title: 'প্রাইম নম্বর চেক',
        problem: 'একটি সংখ্যা প্রাইম কিনা চেক করার ফাংশন লিখুন।',
        hint: 'প্রাইম সংখ্যা শুধু 1 এবং নিজে দিয়ে ভাগ যায়।',
        concept: 'Functions',
        difficulty: 'hard',
        solution: '#include <stdio.h>\n\nint isPrime(int n) {\n    if (n <= 1) return 0;\n    \n    for (int i = 2; i < n; i++) {\n        if (n % i == 0) {\n            return 0;\n        }\n    }\n    return 1;\n}\n\nint main() {\n    int num;\n    \n    printf("সংখ্যা দিন: ");\n    scanf("%d", &num);\n    \n    if (isPrime(num)) {\n        printf("%d একটি প্রাইম সংখ্যা\\n", num);\n    } else {\n        printf("%d প্রাইম সংখ্যা নয়\\n", num);\n    }\n    return 0;\n}',
        output: 'সংখ্যা দিন: 17\n17 একটি প্রাইম সংখ্যা',
        explanation: 'isPrime ফাংশন 2 থেকে n-1 পর্যন্ত যেকোনো সংখ্যা দিয়ে ভাগ যায় কিনা চেক করে।'
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderConceptCards();
    renderExamples();
    setupEventListeners();
    setupMobileMenu();
});

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Render concept cards
function renderConceptCards() {
    const conceptGrid = document.getElementById('conceptGrid');
    conceptGrid.innerHTML = '';

    cConcepts.forEach((concept, index) => {
        const card = createConceptCard(concept, index);
        conceptGrid.appendChild(card);
    });

    setTimeout(() => {
        document.querySelectorAll('.concept-card').forEach(card => {
            card.classList.add('animated');
        });
    }, 1500);
}

// Render practice examples
function renderExamples(filter = 'all') {
    const examplesGrid = document.getElementById('examplesGrid');
    if (!examplesGrid) return;
    
    examplesGrid.innerHTML = '';
    
    const filteredExamples = filter === 'all' 
        ? practiceExamples 
        : practiceExamples.filter(ex => ex.difficulty === filter);
    
    filteredExamples.forEach((example, index) => {
        const card = createExampleCard(example, index);
        examplesGrid.appendChild(card);
    });
}

// Create example card
function createExampleCard(example, index) {
    const card = document.createElement('div');
    card.className = 'example-card bg-slate-900 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer transform hover:scale-[1.02]';
    card.style.animationDelay = `${index * 0.05}s`;
    card.setAttribute('data-difficulty', example.difficulty);
    
    const difficultyColors = {
        easy: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/50', icon: '🟢' },
        medium: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/50', icon: '🟡' },
        hard: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/50', icon: '🔴' }
    };
    
    const colors = difficultyColors[example.difficulty];
    
    card.innerHTML = `
        <div class="flex items-center justify-between mb-2 sm:mb-3">
            <span class="text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}">
                ${colors.icon} ${example.difficulty === 'easy' ? 'সহজ' : example.difficulty === 'medium' ? 'মাঝারি' : 'কঠিন'}
            </span>
            <span class="text-xs text-slate-500">#${example.id}</span>
        </div>
        <h3 class="text-base sm:text-lg font-bold text-white mb-2" style="font-family: 'Noto Sans Bengali', sans-serif;">${example.title}</h3>
        <p class="text-slate-400 text-xs sm:text-sm mb-3 line-clamp-2" style="font-family: 'Noto Sans Bengali', sans-serif;">${example.problem}</p>
        <div class="flex items-center justify-between">
            <span class="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">${example.concept}</span>
            <span class="text-emerald-400 text-xs sm:text-sm font-semibold" style="font-family: 'Noto Sans Bengali', sans-serif;">সমাধান →</span>
        </div>
    `;
    
    card.addEventListener('click', () => openExampleModal(example));
    return card;
}

// Filter examples by difficulty
function filterExamples(difficulty) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
        btn.classList.add('bg-slate-800', 'text-slate-400', 'border-slate-700');
    });
    
    const activeBtn = document.querySelector(`[data-filter="${difficulty}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-slate-800', 'text-slate-400', 'border-slate-700');
        activeBtn.classList.add('active', 'bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
    }
    
    renderExamples(difficulty);
}

window.filterExamples = filterExamples;

// Open example modal
function openExampleModal(example) {
    const modal = document.getElementById('exampleModal');
    
    const difficultyColors = {
        easy: { bg: 'bg-green-500/20', text: 'text-green-400', label: '🟢 সহজ' },
        medium: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: '🟡 মাঝারি' },
        hard: { bg: 'bg-red-500/20', text: 'text-red-400', label: '🔴 কঠিন' }
    };
    
    const colors = difficultyColors[example.difficulty];
    
    document.getElementById('exampleDifficulty').className = `text-sm px-3 py-1 rounded-full ${colors.bg} ${colors.text}`;
    document.getElementById('exampleDifficulty').textContent = colors.label;
    document.getElementById('exampleTitle').textContent = example.title;
    document.getElementById('exampleProblem').textContent = example.problem;
    document.getElementById('exampleHintText').textContent = example.hint;
    document.getElementById('exampleCode').textContent = example.solution;
    document.getElementById('exampleOutput').textContent = example.output;
    document.getElementById('exampleExplanation').textContent = example.explanation;
    
    document.getElementById('exampleHint').classList.add('hidden');
    document.getElementById('exampleSolution').classList.add('hidden');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Close example modal
function closeExampleModal() {
    const modal = document.getElementById('exampleModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

window.closeExampleModal = closeExampleModal;

// Toggle example hint
function toggleExampleHint() {
    const hintDiv = document.getElementById('exampleHint');
    hintDiv.classList.toggle('hidden');
}

window.toggleExampleHint = toggleExampleHint;

// Toggle example solution
function toggleExampleSolution() {
    const solutionDiv = document.getElementById('exampleSolution');
    solutionDiv.classList.toggle('hidden');
}

window.toggleExampleSolution = toggleExampleSolution;

// Create individual concept card
function createConceptCard(concept, index) {
    const card = document.createElement('div');
    card.className = 'concept-card bg-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-800 hover:border-emerald-500/50 transition-all';
    card.style.animationDelay = `${index * 0.1}s`;

    const difficultyClass = `difficulty-${concept.difficulty}`;

    card.innerHTML = `
        <div class="flex items-start justify-between mb-3 sm:mb-4">
            <div class="flex items-center space-x-3 sm:space-x-4">
                <div class="concept-icon w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${concept.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg">
                    ${concept.icon}
                </div>
                <div>
                    <h3 class="text-lg sm:text-2xl font-bold text-white mb-1 font-mono">${concept.name}</h3>
                    <span class="difficulty-badge ${difficultyClass} text-xs">${concept.difficulty}</span>
                </div>
            </div>
        </div>
        <p class="text-slate-400 leading-relaxed text-sm sm:text-base">${concept.description}</p>
        <p class="text-slate-500 leading-relaxed mt-2 text-xs sm:text-sm" style="font-family: 'Noto Sans Bengali', sans-serif;">${concept.descriptionBn}</p>
        <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800">
            <button class="text-emerald-400 hover:text-emerald-300 font-semibold text-xs sm:text-sm transition-colors flex items-center space-x-2">
                <span>Start Learning</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
            </button>
        </div>
    `;

    card.addEventListener('click', () => openConceptModal(concept));
    return card;
}

// Open concept detail modal
function openConceptModal(concept) {
    const modal = document.getElementById('conceptModal');
    
    document.getElementById('modalConceptName').textContent = concept.name;
    document.getElementById('modalDescription').innerHTML = concept.description + '<br><span style="font-family: \'Noto Sans Bengali\', sans-serif; color: #94a3b8;">' + concept.descriptionBn + '</span>';
    document.getElementById('modalSyntax').textContent = concept.syntax;
    document.getElementById('modalExample').textContent = concept.example;
    document.getElementById('modalOutput').textContent = concept.output;
    document.getElementById('modalChallenge').textContent = concept.challenge;
    document.getElementById('hintText').textContent = concept.hint;
    
    document.getElementById('practiceInput').value = '';
    document.getElementById('practiceOutput').classList.add('hidden');
    document.getElementById('hintBox').classList.add('hidden');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('conceptModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Show hint
function showHint() {
    const hintBox = document.getElementById('hintBox');
    hintBox.classList.toggle('hidden');
}

// Run practice code
function runPracticeCode() {
    const input = document.getElementById('practiceInput').value;
    const output = document.getElementById('practiceOutput');
    const result = document.getElementById('practiceResult');
    const runButton = document.getElementById('runCode');
    
    if (input.trim() === '') {
        showNotification('Please write some code first!', 'warning');
        return;
    }
    
    runButton.textContent = 'Compiling...';
    runButton.disabled = true;
    
    setTimeout(() => {
        let outputText = '';
        
        if (!input.includes('#include')) {
            outputText = 'Error: Missing #include directive';
        } else if (!input.includes('main')) {
            outputText = 'Error: main() function not found';
        } else {
            outputText = 'Compilation successful!\n\n--- Program Output ---\n';
            
            if (input.includes('printf')) {
                const printfMatches = input.match(/printf\s*\([^)]*\)/g);
                if (printfMatches) {
                    printfMatches.forEach((match) => {
                        const stringMatch = match.match(/"([^"]*)"/);
                        if (stringMatch) {
                            let text = stringMatch[1]
                                .replace(/\\n/g, '\n')
                                .replace(/\\t/g, '\t')
                                .replace(/%d/g, '0')
                                .replace(/%f/g, '0.0')
                                .replace(/%c/g, 'X');
                            outputText += text;
                        }
                    });
                }
            } else {
                outputText += 'Program compiled but produces no output';
            }
        }
        
        result.textContent = outputText;
        output.classList.remove('hidden');
        
        runButton.textContent = 'Compile & Run';
        runButton.disabled = false;
        
        showNotification('Code executed!', 'success');
    }, 1500);
}

// Reset practice code
function resetPracticeCode() {
    document.getElementById('practiceInput').value = '';
    document.getElementById('practiceOutput').classList.add('hidden');
    document.getElementById('hintBox').classList.add('hidden');
    showNotification('Practice area cleared', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    const colors = {
        success: 'bg-emerald-500',
        error: 'bg-red-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-6 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-2xl z-50 font-semibold`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    document.getElementById('conceptModal').addEventListener('click', (e) => {
        if (e.target.id === 'conceptModal') {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeExampleModal();
        }
    });
    
    document.getElementById('runCode').addEventListener('click', runPracticeCode);
    document.getElementById('resetCode').addEventListener('click', resetPracticeCode);
    document.getElementById('showHint').addEventListener('click', showHint);
    
    document.getElementById('practiceInput').addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runPracticeCode();
        }
    });
}

console.log('%c🚀 Naeem Academy - C Programming', 'font-size: 20px; font-weight: bold; color: #10b981;');
