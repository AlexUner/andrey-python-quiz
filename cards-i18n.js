window.cardTranslations = {
  "en": {
    "1": {
      "topic": "NumPy",
      "question": "How is NumPy usually imported?",
      "answer": "import numpy as np",
      "explain": "np is a short common alias. It makes the code shorter: np.array, np.zeros, np.mean.",
      "choices": [
        "import numpy as np",
        "import pandas as pd",
        "from numpy import pandas",
        "pip install numpy"
      ]
    },
    "2": {
      "topic": "NumPy",
      "question": "How to create a NumPy array from a regular Python list?",
      "answer": "np.array([1, 2, 3])",
      "explain": "np.array converts a list or sublist to ndarray.",
      "choices": [
        "np.array([1, 2, 3])",
        "np.list([1, 2, 3])",
        "pd.array([1, 2, 3])",
        "array.np([1, 2, 3])"
      ]
    },
    "3": {
      "topic": "NumPy",
      "question": "The main difference between ndarray and a regular Python list?",
      "answer": "ndarray stores elements of the same type and performs element-by-element operations quickly.",
      "explain": "It is because of its homogeneous type and internal optimization that NumPy is convenient for numerical calculations.",
      "choices": [
        "ndarray stores elements of the same type and performs element-by-element operations quickly.",
        "ndarray always stores only strings.",
        "ndarray cannot be indexed.",
        "ndarray only works with CSV."
      ]
    },
    "4": {
      "topic": "Array shape",
      "question": "What does the .shape property show?",
      "answer": "Array shape: number of rows, columns and other dimensions.",
      "explain": "For example, shape (2, 3) means 2 rows and 3 columns.",
      "choices": [
        "Array shape: number of rows, columns and other dimensions.",
        "Array data type.",
        "The sum of all elements.",
        "Number of missing values."
      ]
    },
    "5": {
      "topic": "Array shape",
      "question": "What does .ndim show?",
      "answer": "Number of array dimensions.",
      "explain": "A vector usually has ndim = 1, a matrix has ndim = 2.",
      "choices": [
        "Number of array dimensions.",
        "Number of unique values.",
        "Number of rows with NaN.",
        "File size on disk."
      ]
    },
    "6": {
      "topic": "Array shape",
      "question": "What does .size show?",
      "answer": "The total number of array elements.",
      "explain": "For an array with shape (2, 3), size is 6.",
      "choices": [
        "The total number of array elements.",
        "Number of DataFrame columns.",
        "Data type.",
        "Average value."
      ]
    },
    "7": {
      "topic": "Creating Arrays",
      "question": "How to create an array of zeros?",
      "answer": "np.zeros(3) or np.zeros((2, 3))",
      "explain": "Pass a length or shape in parentheses.",
      "choices": [
        "np.zeros(3) or np.zeros((2, 3))",
        "np.empty_list(3)",
        "pd.zeros(3)",
        "np.zeroes.only(3)"
      ]
    },
    "8": {
      "topic": "Creating Arrays",
      "question": "What does np.arange(0, 10, 2) do?",
      "answer": "Creates values 0, 2, 4, 6, 8.",
      "explain": "The right border 10 is not included, the step is 2.",
      "choices": [
        "Creates values 0, 2, 4, 6, 8.",
        "Generates 10 random numbers.",
        "Creates 2 rows and 10 columns.",
        "Sorts an array."
      ]
    },
    "9": {
      "topic": "Creating Arrays",
      "question": "What does np.linspace(0, 10, num=5) do?",
      "answer": "Creates 5 evenly distributed values from 0 to 10.",
      "explain": "linspace is convenient when you need a specified number of points on an interval.",
      "choices": [
        "Creates 5 evenly distributed values from 0 to 10.",
        "Creates values in increments of 5.",
        "Removes 5 values.",
        "Creates 5 columns DataFrame."
      ]
    },
    "10": {
      "topic": "Indexing",
      "question": "What is a boolean mask?",
      "answer": "An array of True/False that selects elements based on a condition.",
      "explain": "For example, a < 4 creates a mask, and a[a < 4] returns matching elements.",
      "choices": [
        "An array of True/False that selects elements based on a condition.",
        "Way to upload CSV.",
        "Chart type.",
        "Function for transposition."
      ]
    },
    "11": {
      "topic": "Indexing",
      "question": "How to select elements less than 4 from array a?",
      "answer": "a[a < 4]",
      "explain": "The condition inside the square brackets filters the elements.",
      "choices": [
        "a[a < 4]",
        "a.less(4)",
        "a.loc[a < 4]",
        "np.read(a < 4)"
      ]
    },
    "12": {
      "topic": "Indexing",
      "question": "What does a[(a < 4) & (a % 2 == 0)] do?",
      "answer": "Selects elements less than 4 and even.",
      "explain": "The & operator means logical AND. It is better to put each condition in parentheses.",
      "choices": [
        "Selects elements less than 4 and even.",
        "Selects elements less than 4 or even.",
        "Calculates the sum of an array.",
        "Changes the shape of the array."
      ]
    },
    "13": {
      "topic": "Axes",
      "question": "What does axis=0 mean when aggregating an array?",
      "answer": "Aggregate down rows for each column.",
      "explain": "In a two-dimensional table, axis=0 usually returns a result for each column.",
      "choices": [
        "Aggregate down rows for each column.",
        "Aggregate across columns for each row.",
        "Remove the zero column.",
        "Sort rows."
      ]
    },
    "14": {
      "topic": "Axes",
      "question": "What does axis=1 mean when aggregating an array?",
      "answer": "Aggregate across columns for each row.",
      "explain": "axis=1 works across the columns inside each row.",
      "choices": [
        "Aggregate across columns for each row.",
        "Aggregate down rows for each column.",
        "Select the first coordinate axis.",
        "Reset the index."
      ]
    },
    "15": {
      "topic": "Array shape",
      "question": "Does reshape change the original array automatically?",
      "answer": "No, the result must be assigned to a variable.",
      "explain": "If you need to keep the new shape: d = c.reshape((4, 2)).",
      "choices": [
        "No, the result must be assigned to a variable.",
        "Yes, it always changes the original array.",
        "Yes, but only for DataFrame.",
        "reshape only sorts the array."
      ]
    },
    "16": {
      "topic": "Matrices",
      "question": "What is the difference between * and @ for NumPy matrices?",
      "answer": "* performs element-wise multiplication, @ performs matrix multiplication.",
      "explain": "This is a common source of error: m1 * m2 and m1 @ m2 give different results.",
      "choices": [
        "* performs element-wise multiplication, @ performs matrix multiplication.",
        "* transposes, @ sorts.",
        "* only works with Pandas.",
        "There is no difference."
      ]
    },
    "17": {
      "topic": "Matrices",
      "question": "How to calculate the scalar product of two vectors?",
      "answer": "np.dot(a, b)",
      "explain": "np.dot is often used when manually parsing matrix multiplication.",
      "choices": [
        "np.dot(a, b)",
        "pd.dot(a, b)",
        "a.reshape(b)",
        "np.unique(a, b)"
      ]
    },
    "18": {
      "topic": "Matrices",
      "question": "How to find the inverse of matrix A?",
      "answer": "np.linalg.inv(A)",
      "explain": "The inverse matrix A^-1 is needed, for example, to solve systems of rowar equations.",
      "choices": [
        "np.linalg.inv(A)",
        "np.inverse(A)",
        "pd.linalg(A)",
        "A.reverse()"
      ]
    },
    "19": {
      "topic": "Metrics",
      "question": "What is MSE?",
      "answer": "The average of the squared errors between predicted and actual values.",
      "explain": "MSE penalizes larger errors more because the difference is squared.",
      "choices": [
        "The average of the squared errors between predicted and actual values.",
        "Number of rows in the table.",
        "Method for removing missing values.",
        "Index type."
      ]
    },
    "20": {
      "topic": "Metrics",
      "question": "How to compactly calculate MSE in NumPy?",
      "answer": "np.mean(np.square(predVal - realVal))",
      "explain": "NumPy lets you calculate the formula over the whole array at once without an explicit loop.",
      "choices": [
        "np.mean(np.square(predVal - realVal))",
        "pd.read_csv(predVal)",
        "np.sort(predVal - realVal)",
        "predVal @ realVal"
      ]
    },
    "21": {
      "topic": "Pandas",
      "question": "How is Pandas usually imported?",
      "answer": "import pandas as pd",
      "explain": "pd is a standard short alias for Pandas.",
      "choices": [
        "import pandas as pd",
        "import numpy as pd",
        "from pandas import np",
        "pip install pandas"
      ]
    },
    "22": {
      "topic": "Pandas",
      "question": "What is DataFrame?",
      "answer": "Data table with rows, columns and index.",
      "explain": "DataFrame is the main Pandas object for tabular data.",
      "choices": [
        "Data table with rows, columns and index.",
        "One list without index.",
        "An array of only zeros.",
        "Python code file."
      ]
    },
    "23": {
      "topic": "Pandas",
      "question": "What is Series?",
      "answer": "One column or one-dimensional array with an index.",
      "explain": "A DataFrame can be thought of as a collection of Series.",
      "choices": [
        "One column or one-dimensional array with an index.",
        "Entire database.",
        "Distribution plot.",
        "Package installation command."
      ]
    },
    "24": {
      "topic": "Loading Data",
      "question": "How to read a CSV file in Pandas?",
      "answer": "pd.read_csv('file.csv')",
      "explain": "read_csv is the basic command for loading CSV into a DataFrame.",
      "choices": [
        "pd.read_csv('file.csv')",
        "np.read_excel('file.csv')",
        "pd.open_csv('file.csv')",
        "DataFrame.csv('file.csv')"
      ]
    },
    "25": {
      "topic": "Loading Data",
      "question": "How to specify index column when reading CSV?",
      "answer": "pd.read_csv('file.csv', index_col=0)",
      "explain": "index_col=0 tells Pandas to use the first column as the index.",
      "choices": [
        "pd.read_csv('file.csv', index_col=0)",
        "pd.read_csv('file.csv', axis=0)",
        "pd.index('file.csv')",
        "np.read_csv(index=True)"
      ]
    },
    "26": {
      "topic": "Primary analysis",
      "question": "What does df.head() do?",
      "answer": "Shows the first rows of the table.",
      "explain": "head is useful immediately after loading the dataset.",
      "choices": [
        "Shows the first rows of the table.",
        "Removes missing values.",
        "Builds a graph.",
        "Calculates correlation."
      ]
    },
    "27": {
      "topic": "Primary analysis",
      "question": "What does df.info() do?",
      "answer": "Shows columns, data types, non-null values, and memory.",
      "explain": "info quickly shows the structure of the dataset and problems with missing values.",
      "choices": [
        "Shows columns, data types, non-null values, and memory.",
        "Shows only the first 5 rows.",
        "Changes the index.",
        "Sorts the values."
      ]
    },
    "28": {
      "topic": "Primary analysis",
      "question": "What does df.describe() do?",
      "answer": "Shows statistics on numeric columns.",
      "explain": "describe shows count, mean, std, min, quartiles and max.",
      "choices": [
        "Shows statistics on numeric columns.",
        "Removes all rows.",
        "Creates a pivot table.",
        "Loads CSV."
      ]
    },
    "29": {
      "topic": "Primary analysis",
      "question": "How to get statistics on categorical columns?",
      "answer": "df.describe(include=object)",
      "explain": "For object columns, Pandas will show count, unique, top and freq.",
      "choices": [
        "df.describe(include=object)",
        "df.info(include=number)",
        "df.category()",
        "np.describe(df)"
      ]
    },
    "30": {
      "topic": "Filtration",
      "question": "How to select one column of a DataFrame?",
      "answer": "df['column_name']",
      "explain": "Square brackets with the column name returns Series.",
      "choices": [
        "df['column_name']",
        "df(column_name)",
        "df.loc()",
        "np.column(df)"
      ]
    },
    "31": {
      "topic": "Filtration",
      "question": "How to select multiple columns of a DataFrame?",
      "answer": "df[['col1', 'col2']]",
      "explain": "We need a list of column names inside square brackets.",
      "choices": [
        "df[['col1', 'col2']]",
        "df['col1', 'col2']",
        "df.multi('col1', 'col2')",
        "np.array(df)"
      ]
    },
    "32": {
      "topic": "Filtration",
      "question": "How to select rows by condition?",
      "answer": "df[df['column'] > value]",
      "explain": "This is Boolean filtering, similar to NumPy masks.",
      "choices": [
        "df[df['column'] > value]",
        "df.where.column > value",
        "df['column' > value]",
        "pd.filter(value)"
      ]
    },
    "33": {
      "topic": "Missing values",
      "question": "What is NaN?",
      "answer": "Missing value.",
      "explain": "NaN needs to be detected and processed before analysis or ML model.",
      "choices": [
        "Missing value.",
        "Chart type.",
        "NumPy import command.",
        "Index column."
      ]
    },
    "34": {
      "topic": "Missing values",
      "question": "How to check the number of missing values by column?",
      "answer": "df.isna().sum()",
      "explain": "isna gives a Boolean map of missing values, sum counts True by column.",
      "choices": [
        "df.isna().sum()",
        "df.dropna().sum()",
        "np.nan(df)",
        "df.empty()"
      ]
    },
    "35": {
      "topic": "Missing values",
      "question": "How to delete rows with missing values?",
      "answer": "df.dropna()",
      "explain": "dropna removes rows or columns with NaN depending on the parameters.",
      "choices": [
        "df.dropna()",
        "df.fillna()",
        "df.remove_empty()",
        "np.drop(df)"
      ]
    },
    "36": {
      "topic": "Missing values",
      "question": "How to replace missing values with 0?",
      "answer": "df.fillna(0)",
      "explain": "fillna fills missing values with the specified value.",
      "choices": [
        "df.fillna(0)",
        "df.dropna(0)",
        "df.replace_nan()",
        "np.zeros(df)"
      ]
    },
    "37": {
      "topic": "Index",
      "question": "What does set_index do?",
      "answer": "Makes the selected column an index of the table.",
      "explain": "For example, df.set_index('Unnamed: 0') designates a column as an index.",
      "choices": [
        "Makes the selected column an index of the table.",
        "Removes all indexes permanently.",
        "Creates a graph.",
        "Counts MSE."
      ]
    },
    "38": {
      "topic": "Index",
      "question": "Why is it important to assign the result of a Pandas transformation?",
      "answer": "Many methods do not change the original DataFrame without assignment or inplace=True.",
      "explain": "For example, df_missing.set_index(...) will not store the result unless it is assigned.",
      "choices": [
        "Many methods do not change the original DataFrame without assignment or inplace=True.",
        "Pandas can't change tables.",
        "Otherwise Python will delete the file.",
        "This is only needed for NumPy."
      ]
    },
    "39": {
      "topic": "Apply",
      "question": "What does df.apply(...) do in Pandas?",
      "answer": "Applies a function to rows or columns.",
      "explain": "For example, apply(np.cumsum, axis=0) applies a cumulative sum across columns.",
      "choices": [
        "Applies a function to rows or columns.",
        "Loads CSV.",
        "Checks the Python version.",
        "Creates an identity matrix."
      ]
    },
    "40": {
      "topic": "GroupBy",
      "question": "What does groupby do?",
      "answer": "Groups data by column and allows values to be aggregated.",
      "explain": "After groupby, sum, mean, size and other aggregates are often called.",
      "choices": [
        "Groups data by column and allows values to be aggregated.",
        "Removes missing values.",
        "Changes the shape of a NumPy array.",
        "Generates random numbers."
      ]
    },
    "41": {
      "topic": "GroupBy",
      "question": "What does an example of grouping look like in Pandas?",
      "answer": "df.groupby('Class').sum()",
      "explain": "The data is grouped by Class, then the numeric values are summed within the groups.",
      "choices": [
        "df.groupby('Class').sum()",
        "df.group('Class')",
        "np.groupby(df)",
        "df.sum('Class').groupby()"
      ]
    },
    "42": {
      "topic": "Pivot",
      "question": "What is a pivot table?",
      "answer": "A table where data is aggregated across selected rows and columns.",
      "explain": "pivot_table is useful for quick slices and comparisons.",
      "choices": [
        "A table where data is aggregated across selected rows and columns.",
        "A regular Python list.",
        "Function for random numbers.",
        "Just a graph without data."
      ]
    },
    "43": {
      "topic": "Pivot",
      "question": "How to create a pivot_table by room and position?",
      "answer": "pd.pivot_table(df, values='Temperature', index='Room', columns='Position')",
      "explain": "values - what to aggregate, index - rows, columns - columns.",
      "choices": [
        "pd.pivot_table(df, values='Temperature', index='Room', columns='Position')",
        "df.pivot_only('Temperature')",
        "np.pivot(df)",
        "pd.read_csv(df, pivot=True)"
      ]
    },
    "44": {
      "topic": "Charts",
      "question": "How to plot a simple Pandas column graph?",
      "answer": "df['Temperature'].plot()",
      "explain": "Pandas has a built-in wrapper over matplotlib for fast plotting.",
      "choices": [
        "df['Temperature'].plot()",
        "df['Temperature'].draw_csv()",
        "np.read_plot(df)",
        "pd.chart.only(df)"
      ]
    },
    "45": {
      "topic": "Charts",
      "question": "How to build a bar chart for a column?",
      "answer": "df['Temperature'].plot(kind='bar')",
      "explain": "The kind parameter specifies the type of graph: bar, hist, kde, box and others.",
      "choices": [
        "df['Temperature'].plot(kind='bar')",
        "df['Temperature'].bar_only()",
        "np.bar(df)",
        "df.boxplot(kind='bar')"
      ]
    },
    "46": {
      "topic": "EDA",
      "question": "What are the first commands that are useful to run after loading a new dataset?",
      "answer": "head(), info(), describe(), isna().sum(), view unique values.",
      "explain": "This is basic primary analysis: structure, types, missing values, statistics and categories.",
      "choices": [
        "head(), info(), describe(), isna().sum(), view unique values.",
        "Only plot(), no data viewing.",
        "Train the model immediately.",
        "Remove all categorical features."
      ]
    },
    "47": {
      "topic": "EDA",
      "question": "Why were text categories converted to numbers in the diamonds example?",
      "answer": "To prepare categorical features for analysis and future ML algorithms.",
      "explain": "For this purpose, dictionaries and the map method were used.",
      "choices": [
        "To prepare categorical features for analysis and future ML algorithms.",
        "To spoil the original data.",
        "To remove all rows.",
        "To replace CSV with Excel."
      ]
    },
    "48": {
      "topic": "EDA",
      "question": "What does the correlation matrix show?",
      "answer": "Relationship between pairs of numerical features.",
      "explain": "Values around 1 indicate a strong positive relationship, values around -1 indicate a negative relationship.",
      "choices": [
        "Relationship between pairs of numerical features.",
        "Number of rows with NaN.",
        "File size.",
        "The names of all CSV files."
      ]
    },
    "49": {
      "topic": "NumPy",
      "question": "What is NumPy used for in this lecture?",
      "answer": "For fast numerical calculations with arrays.",
      "explain": "NumPy provides ndarray array and fast operations on numeric data.",
      "choices": [
        "For fast numerical calculations with arrays.",
        "For page layout.",
        "For working with text only.",
        "To send requests to Telegram."
      ]
    },
    "50": {
      "topic": "NumPy",
      "question": "What does dtype mean for a NumPy array?",
      "answer": "The data type of the array elements.",
      "explain": "In a regular ndarray, elements have one data type.",
      "choices": [
        "The data type of the array elements.",
        "Array size.",
        "Column name.",
        "Number of missing values."
      ]
    },
    "51": {
      "topic": "NumPy",
      "question": "Why does NumPy avoid unnecessary loops?",
      "answer": "Operations are performed element-by-element directly on the array.",
      "explain": "Vectorization makes code shorter and usually faster.",
      "choices": [
        "Operations are performed element-by-element directly on the array.",
        "Because arrays cannot be indexed.",
        "Because NumPy removes loops from code.",
        "Because all data becomes strings."
      ]
    },
    "52": {
      "topic": "NumPy",
      "question": "What is broadcasting in NumPy?",
      "answer": "A rule for automatically applying operations to compatible array forms.",
      "explain": "Broadcasting explains why you can multiply an array by a number or combine arrays of compatible shapes.",
      "choices": [
        "A rule for automatically applying operations to compatible array forms.",
        "Removing missing values.",
        "Sorting DataFrame.",
        "Reading CSV files."
      ]
    },
    "53": {
      "topic": "Creating Arrays",
      "question": "How to create an array of 2 by 3 units?",
      "answer": "np.ones((2, 3))",
      "explain": "The shape of a two-dimensional array is passed as a tuple.",
      "choices": [
        "np.ones((2, 3))",
        "np.ones(2, 3)",
        "pd.ones((2, 3))",
        "np.array.ones(2, 3)"
      ]
    },
    "54": {
      "topic": "Creating Arrays",
      "question": "How to create an array of increasing values from 0 to 4?",
      "answer": "np.arange(5)",
      "explain": "np.arange(5) returns 0, 1, 2, 3, 4.",
      "choices": [
        "np.arange(5)",
        "np.linspace(5)",
        "np.zeros(5)",
        "pd.arange(5)"
      ]
    },
    "55": {
      "topic": "Creating Arrays",
      "question": "How to create 5 equally spaced values from 0 to 10?",
      "answer": "np.linspace(0, 10, num=5)",
      "explain": "linspace specifies the number of points, not the step.",
      "choices": [
        "np.linspace(0, 10, num=5)",
        "np.arange(0, 10, 5)",
        "np.zeros(0, 10, 5)",
        "pd.linspace(0, 10, 5)"
      ]
    },
    "56": {
      "topic": "Sorting",
      "question": "What does np.sort(a) return?",
      "answer": "A sorted copy of the array values.",
      "explain": "In the lecture, sorting is shown as a separate result that needs to be saved if necessary.",
      "choices": [
        "A sorted copy of the array values.",
        "The original array without changes in shape.",
        "DataFrame index column.",
        "Number of unique values."
      ]
    },
    "57": {
      "topic": "Indexing",
      "question": "What does np.argwhere(a == 2) do?",
      "answer": "Returns the positions of elements equal to 2.",
      "explain": "argwhere is needed when indexes of matching elements are important.",
      "choices": [
        "Returns the positions of elements equal to 2.",
        "Removes all twos.",
        "Sorts the array in descending order.",
        "Creates a DataFrame."
      ]
    },
    "58": {
      "topic": "Concatenation",
      "question": "What does np.concatenate((a, b), axis=0) do?",
      "answer": "Concatenates arrays by row.",
      "explain": "axis=0 stacks rows one under another.",
      "choices": [
        "Concatenates arrays by row.",
        "Combines by columns.",
        "Calculates the average.",
        "Transposes an array."
      ]
    },
    "59": {
      "topic": "Concatenation",
      "question": "What does np.concatenate((a, b), axis=1) do?",
      "answer": "Joins arrays by columns.",
      "explain": "axis=1 places columns next to each other.",
      "choices": [
        "Joins arrays by columns.",
        "Merges by row.",
        "Removes columns.",
        "Calculates the sum of rows."
      ]
    },
    "60": {
      "topic": "Array shape",
      "question": "What needs to be done to save reshape in a new variable?",
      "answer": "Assign the result: d = c.reshape((4, 2)).",
      "explain": "Many NumPy operations return a new object.",
      "choices": [
        "Assign the result: d = c.reshape((4, 2)).",
        "Call c.reshape((4, 2)) without assignment.",
        "Use df.dropna().",
        "Call np.unique(c)."
      ]
    },
    "61": {
      "topic": "Array shape",
      "question": "What does a[np.newaxis, :] do?",
      "answer": "Converts a one-dimensional array to a two-dimensional array string.",
      "explain": "newaxis adds a new dimension.",
      "choices": [
        "Converts a one-dimensional array to a two-dimensional array string.",
        "Converts an array to a column.",
        "Deletes the first axis.",
        "Sorts an array."
      ]
    },
    "62": {
      "topic": "Array shape",
      "question": "What does a[:, np.newaxis] do?",
      "answer": "Converts a one-dimensional array to a column.",
      "explain": "This way you can get a two-dimensional column from a vector.",
      "choices": [
        "Converts a one-dimensional array to a column.",
        "Converts an array to a string.",
        "Removes the last element.",
        "Creates a random array."
      ]
    },
    "63": {
      "topic": "Indexing",
      "question": "What does a[1:3] mean?",
      "answer": "Slice elements from index 1 to index 3, not including 3.",
      "explain": "The right edge of a slice is not included in Python.",
      "choices": [
        "Slice elements from index 1 to index 3, not including 3.",
        "Only the element with index 3.",
        "The first three elements.",
        "The last three elements."
      ]
    },
    "64": {
      "topic": "Indexing",
      "question": "What does a[-2:] mean?",
      "answer": "The last two elements of the array.",
      "explain": "Negative indices are counted from the end.",
      "choices": [
        "The last two elements of the array.",
        "The first two elements.",
        "Element with index -2 only.",
        "All elements except the last two."
      ]
    },
    "65": {
      "topic": "Indexing",
      "question": "How to get all elements of the second column of matrix d?",
      "answer": "d[:, 1]",
      "explain": "Colon means all rows, 1 means second column.",
      "choices": [
        "d[:, 1]",
        "d[1, :]",
        "d[1]",
        "d[:, 2]"
      ]
    },
    "66": {
      "topic": "Indexing",
      "question": "Which operator is used for the \"and\" condition in NumPy/Pandas filters?",
      "answer": "&",
      "explain": "Masks use &, and each condition is placed in parentheses.",
      "choices": [
        "&",
        "and",
        "|",
        "&&"
      ]
    },
    "67": {
      "topic": "Indexing",
      "question": "Which operator is used for the \"or\" condition in NumPy/Pandas filters?",
      "answer": "|",
      "explain": "Vector conditions are combined via |.",
      "choices": [
        "|",
        "or",
        "&",
        "||"
      ]
    },
    "68": {
      "topic": "Axes",
      "question": "What will c.sum(axis=0) return for a two-dimensional array?",
      "answer": "Sums for each column.",
      "explain": "axis=0 aggregates rows inside each column.",
      "choices": [
        "Sums for each column.",
        "Sums for each row.",
        "The total sum of all elements.",
        "Number of rows."
      ]
    },
    "69": {
      "topic": "Axes",
      "question": "What will c.sum(axis=1) return for a two-dimensional array?",
      "answer": "Sums for each row.",
      "explain": "axis=1 aggregates columns inside each row.",
      "choices": [
        "Sums for each row.",
        "Sums for each column.",
        "The total sum of all elements.",
        "Number of columns."
      ]
    },
    "70": {
      "topic": "Axes",
      "question": "What does c.sum() do without axis?",
      "answer": "Calculates the sum of all array elements.",
      "explain": "If the axis is not specified, the calculation is carried out over the entire array.",
      "choices": [
        "Calculates the sum of all array elements.",
        "Calculates sums by row.",
        "Calculates sums by column.",
        "Returns the shape of an array."
      ]
    },
    "71": {
      "topic": "Axes",
      "question": "What does c.max(axis=1) do?",
      "answer": "Finds the maximum in each row.",
      "explain": "axis=1 works inside rows.",
      "choices": [
        "Finds the maximum in each row.",
        "Finds the maximum in each column.",
        "Finds the minimum in each row.",
        "Sorts rows."
      ]
    },
    "72": {
      "topic": "Matrices",
      "question": "What is the inverse matrix A^-1?",
      "answer": "Matrix for which A · A^-1 = I.",
      "explain": "I is the identity matrix.",
      "choices": [
        "Matrix for which A · A^-1 = I.",
        "A matrix of zeros.",
        "Transposed matrix.",
        "A matrix of only ones."
      ]
    },
    "73": {
      "topic": "Matrices",
      "question": "How to create a 5 by 5 identity matrix?",
      "answer": "np.eye(5)",
      "explain": "The identity matrix has ones on the diagonal and zeros off the diagonal.",
      "choices": [
        "np.eye(5)",
        "np.ones(5)",
        "np.identity_only(5)",
        "pd.eye(5)"
      ]
    },
    "74": {
      "topic": "Random numbers",
      "question": "What values does np.random.random(...) generate?",
      "answer": "Random float from the interval [0.0, 1.0).",
      "explain": "Right border 1.0 is not included.",
      "choices": [
        "Random float from the interval [0.0, 1.0).",
        "Integer numbers only.",
        "Only values 0 and 1.",
        "Only negative numbers."
      ]
    },
    "75": {
      "topic": "Random numbers",
      "question": "What does np.random.randint(7, size=(3, 4)) mean?",
      "answer": "Random integers less than 7 in a 3 by 4 shaped array.",
      "explain": "The first argument specifies the upper bound, size specifies the shape.",
      "choices": [
        "Random integers less than 7 in a 3 by 4 shaped array.",
        "Seven arrays of 3 by 4 shape.",
        "The numbers are strictly greater than 7.",
        "CSV file with 3 rows and 4 columns."
      ]
    },
    "76": {
      "topic": "Unique values",
      "question": "What is np.unique(r) used for?",
      "answer": "To get array values without repetitions.",
      "explain": "The function is useful when exploring categories and repetitions.",
      "choices": [
        "To get array values without repetitions.",
        "To remove NaN in DataFrame.",
        "To build a graph.",
        "To change the index."
      ]
    },
    "77": {
      "topic": "Tuples",
      "question": "What is a tuple in Python?",
      "answer": "An ordered, immutable collection of elements.",
      "explain": "In this lecture, a tuple is used to pack and unpack values.",
      "choices": [
        "An ordered, immutable collection of elements.",
        "Pandas mutable table.",
        "Numeric array only.",
        "CSV file."
      ]
    },
    "78": {
      "topic": "Tuples",
      "question": "What does e1, _ = a? mean?",
      "answer": "Unpacking a tuple, ignoring the second element.",
      "explain": "Underscore is often used for meaning that is not needed.",
      "choices": [
        "Unpacking a tuple, ignoring the second element.",
        "Removing the first element.",
        "Sorting a tuple.",
        "Creating a DataFrame."
      ]
    },
    "79": {
      "topic": "Tuples",
      "question": "How to quickly swap the values of a and b in Python?",
      "answer": "a, b = b, a",
      "explain": "This is unpacking a tuple without a temporary variable.",
      "choices": [
        "a, b = b, a",
        "tmp = a + b",
        "swap(a, b)",
        "a.change(b)"
      ]
    },
    "80": {
      "topic": "Transpose",
      "question": "What's the shortest way to transpose an array c?",
      "answer": "c.T",
      "explain": "For most cases, the .T property is sufficient.",
      "choices": [
        "c.T",
        "c.reverse()",
        "c.reshape()",
        "c.axis(0)"
      ]
    },
    "81": {
      "topic": "Transpose",
      "question": "Which method also transposes an array?",
      "answer": "c.transpose()",
      "explain": "The transpose method is useful for more complex axis transformations.",
      "choices": [
        "c.transpose()",
        "c.transfer()",
        "c.transport()",
        "c.set_index()"
      ]
    },
    "82": {
      "topic": "Metrics",
      "question": "Why does MSE square the error?",
      "answer": "To take into account the magnitude of the error and penalize larger deviations more strongly.",
      "explain": "The difference pred - real is first squared and then averaged.",
      "choices": [
        "To take into account the magnitude of the error and penalize larger deviations more strongly.",
        "To get only integers.",
        "To remove negative values from the dataset.",
        "To sort an array."
      ]
    },
    "83": {
      "topic": "Charts",
      "question": "How do you usually import matplotlib.pyplot?",
      "answer": "import matplotlib.pyplot as plt",
      "explain": "plt is used for plotting.",
      "choices": [
        "import matplotlib.pyplot as plt",
        "import pandas as plt",
        "import numpy.pyplot as plt",
        "from csv import plt"
      ]
    },
    "84": {
      "topic": "Charts",
      "question": "How is a sinusoid constructed in the lecture?",
      "answer": "x is created via np.arange, y is created via np.sin(x), then plt.plot(x, y).",
      "explain": "This is a basic example of how NumPy and matplotlib communicate.",
      "choices": [
        "x is created via np.arange, y is created via np.sin(x), then plt.plot(x, y).",
        "Via pd.read_csv and dropna.",
        "Via np.linalg.inv.",
        "Via groupby."
      ]
    },
    "85": {
      "topic": "Pandas",
      "question": "What is Pandas used for in this lecture?",
      "answer": "To analyze and transform tabular data.",
      "explain": "Pandas gives DataFrame, Series, CSV reading, filtering and aggregations.",
      "choices": [
        "To analyze and transform tabular data.",
        "For matrix multiplication.",
        "To create a virtual environment.",
        "To generate HTML."
      ]
    },
    "86": {
      "topic": "Pandas",
      "question": "What does a DataFrame consist of?",
      "answer": "From a set of Series, organized as a table.",
      "explain": "Each column of a DataFrame can be thought of as a Series.",
      "choices": [
        "From a set of Series, organized as a table.",
        "From several HTML pages.",
        "Only from NumPy scalars.",
        "Only from the graphs."
      ]
    },
    "87": {
      "topic": "Loading Data",
      "question": "What might appear when reading CSV without index_col?",
      "answer": "An extra column like Unnamed: 0.",
      "explain": "If the source index is saved in CSV, it is better to specify it via index_col.",
      "choices": [
        "An extra column like Unnamed: 0.",
        "Automatic ML model.",
        "An empty NumPy array.",
        "Graph without data."
      ]
    },
    "88": {
      "topic": "Index",
      "question": "How to assign a column as an index after reading a CSV?",
      "answer": "df.set_index('column')",
      "explain": "To save the change, the result must be assigned or used inplace=True.",
      "choices": [
        "df.set_index('column')",
        "df.read_index('column')",
        "np.set_index(df)",
        "df.index_col('column')"
      ]
    },
    "89": {
      "topic": "Index",
      "question": "What does inplace=True do in many Pandas methods?",
      "answer": "Applies the change to the current DataFrame.",
      "explain": "This is shown in the lecture with set_index.",
      "choices": [
        "Applies the change to the current DataFrame.",
        "Creates a new CSV file.",
        "Always speeds up calculations.",
        "Removes an index."
      ]
    },
    "90": {
      "topic": "Primary analysis",
      "question": "What does df.tail() show?",
      "answer": "The last rows of the table.",
      "explain": "tail helps you quickly see the end of a data set.",
      "choices": [
        "The last rows of the table.",
        "The first rows of the table.",
        "Data types only.",
        "Only missing values."
      ]
    },
    "91": {
      "topic": "Primary analysis",
      "question": "What does data.info() show?",
      "answer": "Columns, data types, non-null values and memory.",
      "explain": "This is the basic command after loading the data.",
      "choices": [
        "Columns, data types, non-null values and memory.",
        "Only the average.",
        "Only unique categories.",
        "Only the plot."
      ]
    },
    "92": {
      "topic": "Primary analysis",
      "question": "What does data.describe() show by default?",
      "answer": "Statistics on numeric columns.",
      "explain": "For categorical columns you need include=object.",
      "choices": [
        "Statistics on numeric columns.",
        "Statistics for string columns only.",
        "List of files.",
        "Number of graphs."
      ]
    },
    "93": {
      "topic": "Primary analysis",
      "question": "What does describe(include=object) show?",
      "answer": "Count, number of unique values, most common value and its frequency.",
      "explain": "This is useful for categorical features.",
      "choices": [
        "Count, number of unique values, most common value and its frequency.",
        "Average and standard deviation by numbers.",
        "NaN only.",
        "Only indexes."
      ]
    },
    "94": {
      "topic": "Categories",
      "question": "How to view the unique values of a cut column?",
      "answer": "data['cut'].unique()",
      "explain": "unique helps you understand the possible categories.",
      "choices": [
        "data['cut'].unique()",
        "data.unique('cut')",
        "pd.unique_values(data)",
        "data['cut'].describe(number)"
      ]
    },
    "95": {
      "topic": "Categories",
      "question": "How are text categories translated into numbers in a lecture?",
      "answer": "Through dictionaries and the map method.",
      "explain": "For example, data['cut'] = data['cut'].map(cut_map).",
      "choices": [
        "Through dictionaries and the map method.",
        "Via dropna.",
        "Via np.eye.",
        "Via plt.plot."
      ]
    },
    "96": {
      "topic": "Categories",
      "question": "What does value_counts() do?",
      "answer": "Counts the number of occurrences of each value.",
      "explain": "In the lecture, value_counts is used for the cut column.",
      "choices": [
        "Counts the number of occurrences of each value.",
        "Removes duplicate rows.",
        "Builds a correlation matrix.",
        "Changes the data type."
      ]
    },
    "97": {
      "topic": "Categories",
      "question": "How to sort the result of value_counts in ascending order?",
      "answer": "count.sort_values(ascending=True)",
      "explain": "sort_values controls the order of values.",
      "choices": [
        "count.sort_values(ascending=True)",
        "count.order(True)",
        "count.groupby(True)",
        "np.sort_values(count)"
      ]
    },
    "98": {
      "topic": "Filtration",
      "question": "How to select rows based on multiple conditions in Pandas?",
      "answer": "df[(cond1) & (cond2)]",
      "explain": "Each condition is placed in parentheses and & or | is used.",
      "choices": [
        "df[(cond1) & (cond2)]",
        "df[cond1 and cond2]",
        "df.where(cond1, cond2, and)",
        "np.filter(df)"
      ]
    },
    "99": {
      "topic": "Filtration",
      "question": "What does the query method do?",
      "answer": "Filters a DataFrame with a string condition expression.",
      "explain": "query is an alternative filtering method.",
      "choices": [
        "Filters a DataFrame with a string condition expression.",
        "Reads CSV.",
        "Creates an identity matrix.",
        "Removes all categories."
      ]
    },
    "100": {
      "topic": "Missing values",
      "question": "What does dropna(how='any') do?",
      "answer": "Removes rows with at least one missing value.",
      "explain": "how='any' means any NaN is enough for removal.",
      "choices": [
        "Removes rows with at least one missing value.",
        "Removes only completely empty rows.",
        "Fills NaN with zeros.",
        "Counts unique values."
      ]
    },
    "101": {
      "topic": "Missing values",
      "question": "What does fillna(0.0) do?",
      "answer": "Replaces missing values with 0.0.",
      "explain": "Gap filling preserves the rows but changes the NaN values.",
      "choices": [
        "Replaces missing values with 0.0.",
        "Removes all rows with zeros.",
        "Sorts the DataFrame.",
        "Changes the index."
      ]
    },
    "102": {
      "topic": "Missing values",
      "question": "What does pd.isna(df_missing) return?",
      "answer": "Boolean map of missing values.",
      "explain": "True indicates a missing value.",
      "choices": [
        "Boolean map of missing values.",
        "List of all CSV files.",
        "Random array.",
        "Pivot table."
      ]
    },
    "103": {
      "topic": "Apply",
      "question": "What does df_missing.apply(np.cumsum, axis=0) do?",
      "answer": "Sequentially sums the values across columns.",
      "explain": "axis=0 applies the function down columns.",
      "choices": [
        "Sequentially sums the values across columns.",
        "Sums across rows.",
        "Removes NaN.",
        "Builds a bar chart."
      ]
    },
    "104": {
      "topic": "Apply",
      "question": "What does lambda x: x.max() - x.min() count?",
      "answer": "Range of values.",
      "explain": "The range is equal to the maximum minus the minimum.",
      "choices": [
        "Range of values.",
        "Average value.",
        "Number of rows.",
        "Maximum index."
      ]
    },
    "105": {
      "topic": "GroupBy",
      "question": "What does df.groupby('Class').sum() do?",
      "answer": "Groups rows by Class and sums numeric columns.",
      "explain": "groupby is used to aggregate by category.",
      "choices": [
        "Groups rows by Class and sums numeric columns.",
        "Removes the Class column.",
        "Sorts Class alphabetically without aggregation.",
        "Creates a NumPy array."
      ]
    },
    "106": {
      "topic": "GroupBy",
      "question": "What does as_index=False mean in groupby?",
      "answer": "A grouping column remains a regular column, not an index.",
      "explain": "This is convenient for further plotting.",
      "choices": [
        "A grouping column remains a regular column, not an index.",
        "All indexes from the file are removed.",
        "The data is sorted in descending order.",
        "missing values are replaced with zeros."
      ]
    },
    "107": {
      "topic": "Pivot",
      "question": "What does the values parameter set in pivot_table?",
      "answer": "Which values to aggregate.",
      "explain": "For example, values=['Temperature'].",
      "choices": [
        "Which values to aggregate.",
        "Which rows to delete.",
        "Which file to open.",
        "What chart color to use."
      ]
    },
    "108": {
      "topic": "Pivot",
      "question": "What does the index parameter in pivot_table specify?",
      "answer": "Pivot table rows.",
      "explain": "For example, index=['Room'].",
      "choices": [
        "Pivot table rows.",
        "Pivot table columns.",
        "Aggregation function.",
        "Chart type."
      ]
    },
    "109": {
      "topic": "Pivot",
      "question": "What does the columns parameter set in pivot_table?",
      "answer": "Pivot table columns.",
      "explain": "For example, columns=['Position'].",
      "choices": [
        "Pivot table columns.",
        "Pivot table rows.",
        "File to read.",
        "Array size."
      ]
    },
    "110": {
      "topic": "Pivot",
      "question": "What does aggfunc define in pivot_table?",
      "answer": "Aggregation function.",
      "explain": "The lecture shows aggfunc=np.max.",
      "choices": [
        "Aggregation function.",
        "Index column.",
        "Type of missing values.",
        "CSV name."
      ]
    },
    "111": {
      "topic": "Charts",
      "question": "How to plot a boxplot in Pandas?",
      "answer": "df.boxplot()",
      "explain": "Boxplot helps you see the distribution and outliers.",
      "choices": [
        "df.boxplot()",
        "df.plot(kind='csv')",
        "np.box(df)",
        "df.describe(box=True)"
      ]
    },
    "112": {
      "topic": "Charts",
      "question": "How to build a boxplot by Room groups?",
      "answer": "dfp.boxplot(by=['Room'])",
      "explain": "The by parameter groups the data for the plot.",
      "choices": [
        "dfp.boxplot(by=['Room'])",
        "dfp.groupby_plot('Room')",
        "np.boxplot(Room)",
        "dfp.plot(by=False)"
      ]
    },
    "113": {
      "topic": "Charts",
      "question": "What is kind used for in plot?",
      "answer": "To select the graph type.",
      "explain": "For example, kind='bar' builds a bar chart.",
      "choices": [
        "To select the graph type.",
        "To select an index.",
        "To remove NaN.",
        "To change dtype."
      ]
    },
    "114": {
      "topic": "Diamonds",
      "question": "What are the basic steps in the diamonds example?",
      "answer": "Loading, info, describe, categories, skips, filtering, graphs, correlation.",
      "explain": "This is an example of a complete primary data study.",
      "choices": [
        "Loading, info, describe, categories, skips, filtering, graphs, correlation.",
        "Matrix multiplication only.",
        "Only installing libraries.",
        "Only solving a system of equations."
      ]
    },
    "115": {
      "topic": "Diamonds",
      "question": "Why use data = dmds.copy()?",
      "answer": "To work with a copy and not change the original DataFrame.",
      "explain": "The copy protects the original data from accidental changes.",
      "choices": [
        "To work with a copy and not change the original DataFrame.",
        "To remove all rows.",
        "To create a NumPy array.",
        "To open an Excel file."
      ]
    },
    "116": {
      "topic": "Diamonds",
      "question": "What does data.isna().sum() do in the diamonds example?",
      "answer": "Shows the number of missing values in columns.",
      "explain": "NaN is usually checked before ML.",
      "choices": [
        "Shows the number of missing values in columns.",
        "Counts the amount of diamonds.",
        "Builds violin plot.",
        "Changes categories to numbers."
      ]
    },
    "117": {
      "topic": "Diamonds",
      "question": "What does the topq filter select in the diamonds example?",
      "answer": "Diamonds that meet the conditions of carat, clarity, color and cut.",
      "explain": "This is an example of filtering by multiple conditions.",
      "choices": [
        "Diamonds that meet the conditions of carat, clarity, color and cut.",
        "All strings with NaN.",
        "Only the first five rows.",
        "All countries from the COVID dataset."
      ]
    },
    "118": {
      "topic": "Diamonds",
      "question": "What is a multi-index in a diamonds pivot table?",
      "answer": "An index of several levels, for example clarity, color and cut.",
      "explain": "Values can be accessed via .loc at multiple levels.",
      "choices": [
        "An index of several levels, for example clarity, color and cut.",
        "A regular Python list.",
        "Matrix of units.",
        "CSV with multiple files."
      ]
    },
    "119": {
      "topic": "Diamonds",
      "question": "Why is seaborn violinplot used in the diamonds example?",
      "answer": "To visualize distributions of multiple features.",
      "explain": "Violin plot shows the shape of the distribution.",
      "choices": [
        "To visualize distributions of multiple features.",
        "To read the CSV.",
        "To find the inverse matrix.",
        "To replace NaN."
      ]
    },
    "120": {
      "topic": "Correlation",
      "question": "What does a correlation close to 1 mean?",
      "answer": "Strong positive relationship between traits.",
      "explain": "Both traits usually grow in the same direction.",
      "choices": [
        "Strong positive relationship between traits.",
        "Strong negative connection.",
        "Complete lack of communication.",
        "Data error."
      ]
    },
    "121": {
      "topic": "Correlation",
      "question": "What does a negative correlation mean?",
      "answer": "Signs change in opposite directions.",
      "explain": "The closer the value is to -1, the stronger the negative relationship.",
      "choices": [
        "Signs change in opposite directions.",
        "Both traits grow together.",
        "The data must contain NaN.",
        "The column is an index."
      ]
    },
    "122": {
      "topic": "COVID",
      "question": "How is the date column read in the COVID example?",
      "answer": "pd.read_csv(filename, parse_dates=['dateRep'])",
      "explain": "parse_dates converts the specified column to dates.",
      "choices": [
        "pd.read_csv(filename, parse_dates=['dateRep'])",
        "pd.read_csv(filename, date='auto')",
        "np.read_csv(parse_dates=True)",
        "pd.dateRep(filename)"
      ]
    },
    "123": {
      "topic": "COVID",
      "question": "What is pd.set_option('display.float_format', ...) used for?",
      "answer": "To disable scientific notation for floating point numbers.",
      "explain": "This makes the output of large numbers more readable.",
      "choices": [
        "To disable scientific notation for floating point numbers.",
        "To remove missing values.",
        "To change the index.",
        "To build a graph."
      ]
    },
    "124": {
      "topic": "COVID",
      "question": "How to select multiple numeric columns via loc?",
      "answer": "data.loc[:, ['cases', 'deaths', 'popData2019']]",
      "explain": "The colon specifies all rows, the list specifies the columns.",
      "choices": [
        "data.loc[:, ['cases', 'deaths', 'popData2019']]",
        "data[['cases':'popData2019']]",
        "data.loc('cases', 'deaths')",
        "np.loc(data)"
      ]
    },
    "125": {
      "topic": "COVID",
      "question": "Why is the geoId for Namibia manually corrected to 'NA'?",
      "answer": "Because NA is a Namibia code and not a pass.",
      "explain": "It is important to distinguish between real code and a missing value.",
      "choices": [
        "Because NA is a Namibia code and not a pass.",
        "Because Namibia needs to be removed.",
        "Because NA always means number.",
        "Because geoId must be an index."
      ]
    },
    "126": {
      "topic": "COVID",
      "question": "What does data.dropna(inplace=True) do in the COVID example?",
      "answer": "Removes rows with missing values directly in the current DataFrame.",
      "explain": "inplace=True saves the change directly in data.",
      "choices": [
        "Removes rows with missing values directly in the current DataFrame.",
        "Fills missing values with zeros.",
        "Creates a copy without changes.",
        "Constructs a time series."
      ]
    },
    "127": {
      "topic": "COVID",
      "question": "How do they count cases and deaths by country in the COVID example?",
      "answer": "data.groupby('countriesAndTerritories')[['cases','deaths']].sum()",
      "explain": "groupby aggregates numeric values within each country.",
      "choices": [
        "data.groupby('countriesAndTerritories')[['cases','deaths']].sum()",
        "data.pivot_only('countries')",
        "np.sum(data, 'countries')",
        "data.describe(include=object)"
      ]
    },
    "128": {
      "topic": "COVID",
      "question": "How is the percentage of deaths percdeaths calculated?",
      "answer": "(deaths / cases) * 100",
      "explain": "This is the percentage of deaths out of total cases.",
      "choices": [
        "(deaths / cases) * 100",
        "cases / deaths",
        "deaths + cases",
        "cases * deaths"
      ]
    },
    "129": {
      "topic": "COVID",
      "question": "How is the time series of deaths for Italy constructed?",
      "answer": "Select Italy, set dateRep as index, build mycountry['deaths'].plot().",
      "explain": "A date index is needed for a time series.",
      "choices": [
        "Select Italy, set dateRep as index, build mycountry['deaths'].plot().",
        "Immediately call np.eye(Italy).",
        "Remove dateRep column.",
        "Group by cut."
      ]
    },
    "130": {
      "topic": "COVID",
      "question": "What does the pivot_table show by continentExp and year?",
      "answer": "Sums of cases and deaths by continent and year.",
      "explain": "This is an example of multidimensional data aggregation.",
      "choices": [
        "Sums of cases and deaths by continent and year.",
        "NumPy array shape.",
        "List of unique diamonds.",
        "Model errors."
      ]
    }
  }
};
