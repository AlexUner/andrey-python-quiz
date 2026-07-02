const cards = [
  {
    id: 1,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Как одной фразой описать проект Андрея?",
      en: "How can Andrey describe his project in one sentence?"
    },
    answer: {
      ru: "Это supervised multi-class classification project для предсказания вида пингвина по признакам Palmer Penguins.",
      en: "It is a supervised multi-class classification project that predicts penguin species from Palmer Penguins features."
    },
    choices: [
      {
        ru: "Это supervised multi-class classification project для предсказания вида пингвина по признакам Palmer Penguins.",
        en: "It is a supervised multi-class classification project that predicts penguin species from Palmer Penguins features."
      },
      {
        ru: "Это unsupervised clustering project без известных меток.",
        en: "It is an unsupervised clustering project without known labels."
      },
      {
        ru: "Это regression project для предсказания веса пингвина.",
        en: "It is a regression project for predicting penguin body mass."
      },
      {
        ru: "Это NLP project для классификации текста.",
        en: "It is an NLP project for text classification."
      }
    ],
    explain: {
      ru: "Target `species` известен заранее и содержит три класса: Adelie, Chinstrap, Gentoo.",
      en: "The target `species` is known in advance and has three classes: Adelie, Chinstrap, and Gentoo."
    }
  },
  {
    id: 2,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Почему задача является supervised learning?",
      en: "Why is the task supervised learning?"
    },
    answer: {
      ru: "Потому что модель обучается на примерах, где правильный вид пингвина уже известен.",
      en: "Because the model learns from examples where the correct penguin species is already known."
    },
    choices: [
      {
        ru: "Потому что модель обучается на примерах, где правильный вид пингвина уже известен.",
        en: "Because the model learns from examples where the correct penguin species is already known."
      },
      {
        ru: "Потому что модель сама ищет группы без меток.",
        en: "Because the model discovers groups without labels."
      },
      {
        ru: "Потому что используются только числовые признаки.",
        en: "Because only numerical features are used."
      },
      {
        ru: "Потому что модель не проверяется на test set.",
        en: "Because the model is not evaluated on a test set."
      }
    ],
    explain: {
      ru: "В supervised learning есть пары `X` и `y`: признаки и правильные ответы.",
      en: "In supervised learning, we have `X` and `y`: features and correct labels."
    }
  },
  {
    id: 3,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Что является target variable в проекте?",
      en: "What is the target variable in the project?"
    },
    answer: {
      ru: "`species`, то есть вид пингвина.",
      en: "`species`, the penguin species."
    },
    choices: [
      {
        ru: "`species`, то есть вид пингвина.",
        en: "`species`, the penguin species."
      },
      {
        ru: "`bill_length_mm`, длина клюва.",
        en: "`bill_length_mm`, bill length."
      },
      {
        ru: "`island`, остров наблюдения.",
        en: "`island`, the island of observation."
      },
      {
        ru: "`year`, год наблюдения.",
        en: "`year`, the year of observation."
      }
    ],
    explain: {
      ru: "Target - это то, что модель должна предсказать. Здесь нужно выбрать один из трех видов.",
      en: "The target is what the model must predict. Here the model chooses one of three species."
    }
  },
  {
    id: 4,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Какие классы есть в target variable?",
      en: "Which classes are in the target variable?"
    },
    answer: {
      ru: "Adelie, Chinstrap и Gentoo.",
      en: "Adelie, Chinstrap, and Gentoo."
    },
    choices: [
      {
        ru: "Adelie, Chinstrap и Gentoo.",
        en: "Adelie, Chinstrap, and Gentoo."
      },
      {
        ru: "Biscoe, Dream и Torgersen.",
        en: "Biscoe, Dream, and Torgersen."
      },
      {
        ru: "Male, female и unknown.",
        en: "Male, female, and unknown."
      },
      {
        ru: "Train, validation и test.",
        en: "Train, validation, and test."
      }
    ],
    explain: {
      ru: "Biscoe, Dream и Torgersen - это острова, а не классы целевой переменной.",
      en: "Biscoe, Dream, and Torgersen are islands, not target classes."
    }
  },
  {
    id: 5,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Что такое feature в этом проекте?",
      en: "What is a feature in this project?"
    },
    answer: {
      ru: "Входной признак, по которому модель предсказывает вид: длина клюва, масса, остров, пол и другие.",
      en: "An input variable used to predict species, such as bill length, body mass, island, sex, and others."
    },
    choices: [
      {
        ru: "Входной признак, по которому модель предсказывает вид: длина клюва, масса, остров, пол и другие.",
        en: "An input variable used to predict species, such as bill length, body mass, island, sex, and others."
      },
      {
        ru: "Только правильный ответ модели.",
        en: "Only the correct answer of the model."
      },
      {
        ru: "Только график после обучения.",
        en: "Only a plot after model training."
      },
      {
        ru: "Только строка с ошибкой в confusion matrix.",
        en: "Only an error row in the confusion matrix."
      }
    ],
    explain: {
      ru: "Features образуют `X`; target образует `y`.",
      en: "Features form `X`; the target forms `y`."
    }
  },
  {
    id: 6,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Почему Palmer Penguins можно назвать простым учебным датасетом?",
      en: "Why can Palmer Penguins be called a simple educational dataset?"
    },
    answer: {
      ru: "Он маленький, понятный, табличный и хорошо известен для базового ML.",
      en: "It is small, understandable, tabular, and well known for basic machine learning."
    },
    choices: [
      {
        ru: "Он маленький, понятный, табличный и хорошо известен для базового ML.",
        en: "It is small, understandable, tabular, and well known for basic machine learning."
      },
      {
        ru: "В нем миллионы строк и сложные изображения.",
        en: "It has millions of rows and complex images."
      },
      {
        ru: "Он не содержит target variable.",
        en: "It does not contain a target variable."
      },
      {
        ru: "Он требует deep learning для любого результата.",
        en: "It requires deep learning for any result."
      }
    ],
    explain: {
      ru: "Именно поэтому преподаватель ожидает уверенного объяснения всех базовых терминов.",
      en: "That is why the teacher expects a clear explanation of all basic terms."
    }
  },
  {
    id: 7,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Что означает EDA?",
      en: "What does EDA mean?"
    },
    answer: {
      ru: "Exploratory Data Analysis: изучение данных до моделирования.",
      en: "Exploratory Data Analysis: exploring and understanding the data before modeling."
    },
    choices: [
      {
        ru: "Exploratory Data Analysis: изучение данных до моделирования.",
        en: "Exploratory Data Analysis: exploring and understanding the data before modeling."
      },
      {
        ru: "External Data Algorithm: внешний алгоритм данных.",
        en: "External Data Algorithm: an external data algorithm."
      },
      {
        ru: "Error Detection Accuracy: точность поиска ошибок.",
        en: "Error Detection Accuracy: accuracy of error detection."
      },
      {
        ru: "Encoded Dataset Aggregation: агрегация закодированных данных.",
        en: "Encoded Dataset Aggregation: aggregation of encoded data."
      }
    ],
    explain: {
      ru: "Это был один из вопросов на защите, поэтому формулировку нужно знать дословно.",
      en: "This was one of the exam questions, so Andrey should know the definition clearly."
    }
  },
  {
    id: 8,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Что проверяют во время EDA?",
      en: "What do we check during EDA?"
    },
    answer: {
      ru: "Пропуски, баланс классов, распределения, выбросы и связи между признаками.",
      en: "Missing values, class balance, distributions, outliers, and relationships between features."
    },
    choices: [
      {
        ru: "Пропуски, баланс классов, распределения, выбросы и связи между признаками.",
        en: "Missing values, class balance, distributions, outliers, and relationships between features."
      },
      {
        ru: "Только финальный accuracy.",
        en: "Only the final accuracy."
      },
      {
        ru: "Только установку Python packages.",
        en: "Only installing Python packages."
      },
      {
        ru: "Только random_state модели.",
        en: "Only the model's random_state."
      }
    ],
    explain: {
      ru: "EDA помогает понять, какие preprocessing steps и модели имеют смысл.",
      en: "EDA helps decide which preprocessing steps and models make sense."
    }
  },
  {
    id: 9,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Зачем в проекте был `df.info()`?",
      en: "Why was `df.info()` used in the project?"
    },
    answer: {
      ru: "Чтобы увидеть столбцы, типы данных, non-null counts и наличие пропусков.",
      en: "To see columns, data types, non-null counts, and missing values."
    },
    choices: [
      {
        ru: "Чтобы увидеть столбцы, типы данных, non-null counts и наличие пропусков.",
        en: "To see columns, data types, non-null counts, and missing values."
      },
      {
        ru: "Чтобы обучить Logistic Regression.",
        en: "To train Logistic Regression."
      },
      {
        ru: "Чтобы заменить train-test split.",
        en: "To replace the train-test split."
      },
      {
        ru: "Чтобы закодировать categorical features.",
        en: "To encode categorical features."
      }
    ],
    explain: {
      ru: "В notebook видно, что у числовых признаков есть 342 non-null из 344, а у `sex` 333.",
      en: "In the notebook, numerical features have 342 non-null values out of 344, while `sex` has 333."
    }
  },
  {
    id: 10,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Зачем был `df.describe(include='all')`?",
      en: "Why was `df.describe(include='all')` used?"
    },
    answer: {
      ru: "Чтобы получить статистику и по числовым, и по категориальным столбцам.",
      en: "To get summary statistics for both numerical and categorical columns."
    },
    choices: [
      {
        ru: "Чтобы получить статистику и по числовым, и по категориальным столбцам.",
        en: "To get summary statistics for both numerical and categorical columns."
      },
      {
        ru: "Чтобы удалить все NaN.",
        en: "To remove all NaN values."
      },
      {
        ru: "Чтобы построить Random Forest.",
        en: "To build a Random Forest."
      },
      {
        ru: "Чтобы посчитать only weighted F1.",
        en: "To calculate only weighted F1."
      }
    ],
    explain: {
      ru: "Для числовых столбцов видны mean/std/min/max, для категорий count/unique/top/freq.",
      en: "For numerical columns it shows mean/std/min/max; for categorical columns it shows count/unique/top/freq."
    }
  },
  {
    id: 11,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Что показал class balance в `species.value_counts()`?",
      en: "What did class balance in `species.value_counts()` show?"
    },
    answer: {
      ru: "Adelie = 152, Gentoo = 124, Chinstrap = 68; классы не идеально сбалансированы.",
      en: "Adelie = 152, Gentoo = 124, Chinstrap = 68; the classes are not perfectly balanced."
    },
    choices: [
      {
        ru: "Adelie = 152, Gentoo = 124, Chinstrap = 68; классы не идеально сбалансированы.",
        en: "Adelie = 152, Gentoo = 124, Chinstrap = 68; the classes are not perfectly balanced."
      },
      {
        ru: "Все три класса имеют одинаковое количество строк.",
        en: "All three classes have the same number of rows."
      },
      {
        ru: "Chinstrap является самым большим классом.",
        en: "Chinstrap is the largest class."
      },
      {
        ru: "В target есть только два класса.",
        en: "The target has only two classes."
      }
    ],
    explain: {
      ru: "Из-за меньшего Chinstrap полезны stratified split, confusion matrix и weighted F1.",
      en: "Because Chinstrap is smaller, stratified split, confusion matrix, and weighted F1 are useful."
    }
  },
  {
    id: 12,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Что показывает scatter plot bill length vs bill depth?",
      en: "What does the scatter plot of bill length vs bill depth show?"
    },
    answer: {
      ru: "Показывает, разделяются ли виды пингвинов в пространстве двух признаков.",
      en: "It shows whether penguin species separate in the space of two features."
    },
    choices: [
      {
        ru: "Показывает, разделяются ли виды пингвинов в пространстве двух признаков.",
        en: "It shows whether penguin species separate in the space of two features."
      },
      {
        ru: "Показывает только количество пропусков.",
        en: "It shows only the number of missing values."
      },
      {
        ru: "Показывает порядок train-test split.",
        en: "It shows the order of the train-test split."
      },
      {
        ru: "Показывает веса Logistic Regression.",
        en: "It shows Logistic Regression weights."
      }
    ],
    explain: {
      ru: "Если классы визуально разделяются, простые классификаторы могут работать очень хорошо.",
      en: "If classes are visually separable, simple classifiers can perform very well."
    }
  },
  {
    id: 13,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Что показывают boxplots по flipper length и body mass?",
      en: "What do boxplots for flipper length and body mass show?"
    },
    answer: {
      ru: "Они сравнивают распределения размеров между видами.",
      en: "They compare body-size distributions across species."
    },
    choices: [
      {
        ru: "Они сравнивают распределения размеров между видами.",
        en: "They compare body-size distributions across species."
      },
      {
        ru: "Они кодируют категориальные признаки.",
        en: "They encode categorical features."
      },
      {
        ru: "Они выбирают random_state.",
        en: "They choose random_state."
      },
      {
        ru: "Они заменяют confusion matrix.",
        en: "They replace the confusion matrix."
      }
    ],
    explain: {
      ru: "По ним можно объяснить, почему физические признаки полезны для классификации.",
      en: "They help explain why physical features are useful for classification."
    }
  },
  {
    id: 14,
    topic: "EDA",
    visual: "assets/eda.svg",
    question: {
      ru: "Что такое ydata-profiling в проекте?",
      en: "What is ydata-profiling in the project?"
    },
    answer: {
      ru: "Инструмент автоматического EDA-отчета по структуре, пропускам, распределениям и связям данных.",
      en: "A tool for an automatic EDA report about structure, missing values, distributions, and relationships."
    },
    choices: [
      {
        ru: "Инструмент автоматического EDA-отчета по структуре, пропускам, распределениям и связям данных.",
        en: "A tool for an automatic EDA report about structure, missing values, distributions, and relationships."
      },
      {
        ru: "Алгоритм ансамблевого обучения.",
        en: "An ensemble learning algorithm."
      },
      {
        ru: "Метрика качества классификации.",
        en: "A classification metric."
      },
      {
        ru: "Метод oversampling.",
        en: "An oversampling method."
      }
    ],
    explain: {
      ru: "Автоматический отчет помогает, но не заменяет собственную интерпретацию графиков.",
      en: "An automatic report helps, but it does not replace your own interpretation of plots."
    }
  },
  {
    id: 15,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Что такое preprocessing в ML pipeline?",
      en: "What is preprocessing in an ML pipeline?"
    },
    answer: {
      ru: "Подготовка данных перед моделью: обработка пропусков, scaling и encoding.",
      en: "Preparing data before modeling: handling missing values, scaling, and encoding."
    },
    choices: [
      {
        ru: "Подготовка данных перед моделью: обработка пропусков, scaling и encoding.",
        en: "Preparing data before modeling: handling missing values, scaling, and encoding."
      },
      {
        ru: "Только финальное сравнение моделей.",
        en: "Only final model comparison."
      },
      {
        ru: "Только построение pie chart.",
        en: "Only building a pie chart."
      },
      {
        ru: "Только выбор цвета графика.",
        en: "Only choosing plot colors."
      }
    ],
    explain: {
      ru: "В проекте preprocessing сделан через `ColumnTransformer` и `Pipeline`.",
      en: "In the project, preprocessing is done with `ColumnTransformer` and `Pipeline`."
    }
  },
  {
    id: 16,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Как в проекте обрабатывались numerical features?",
      en: "How were numerical features processed in the project?"
    },
    answer: {
      ru: "Median imputation, затем StandardScaler.",
      en: "Median imputation, then StandardScaler."
    },
    choices: [
      {
        ru: "Median imputation, затем StandardScaler.",
        en: "Median imputation, then StandardScaler."
      },
      {
        ru: "One-hot encoding, затем SMOTE.",
        en: "One-hot encoding, then SMOTE."
      },
      {
        ru: "Удаление всех числовых столбцов.",
        en: "Removing all numerical columns."
      },
      {
        ru: "Label encoding без scaling.",
        en: "Label encoding without scaling."
      }
    ],
    explain: {
      ru: "Median устойчивее к выбросам, а scaling нужен для моделей вроде KNN.",
      en: "The median is robust to outliers, and scaling is needed for models such as KNN."
    }
  },
  {
    id: 17,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Как в проекте обрабатывались categorical features?",
      en: "How were categorical features processed in the project?"
    },
    answer: {
      ru: "Most frequent imputation, затем one-hot encoding.",
      en: "Most frequent imputation, then one-hot encoding."
    },
    choices: [
      {
        ru: "Most frequent imputation, затем one-hot encoding.",
        en: "Most frequent imputation, then one-hot encoding."
      },
      {
        ru: "StandardScaler без encoding.",
        en: "StandardScaler without encoding."
      },
      {
        ru: "Median imputation и Logistic Regression.",
        en: "Median imputation and Logistic Regression."
      },
      {
        ru: "Удаление target variable.",
        en: "Removing the target variable."
      }
    ],
    explain: {
      ru: "Категории `island` и `sex` должны стать числовыми признаками для sklearn-моделей.",
      en: "Categories such as `island` and `sex` must become numerical features for sklearn models."
    }
  },
  {
    id: 18,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Зачем нужен SimpleImputer?",
      en: "Why is SimpleImputer needed?"
    },
    answer: {
      ru: "Чтобы заполнить missing values перед обучением модели.",
      en: "To fill missing values before model training."
    },
    choices: [
      {
        ru: "Чтобы заполнить missing values перед обучением модели.",
        en: "To fill missing values before model training."
      },
      {
        ru: "Чтобы посчитать accuracy.",
        en: "To calculate accuracy."
      },
      {
        ru: "Чтобы разбить данные на train и test.",
        en: "To split data into train and test."
      },
      {
        ru: "Чтобы построить confusion matrix.",
        en: "To build a confusion matrix."
      }
    ],
    explain: {
      ru: "Многие модели sklearn не обучаются напрямую на NaN.",
      en: "Many sklearn models cannot train directly on NaN values."
    }
  },
  {
    id: 19,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Почему для числовых пропусков выбрана median imputation?",
      en: "Why use median imputation for numerical missing values?"
    },
    answer: {
      ru: "Median менее чувствительна к выбросам, чем mean.",
      en: "The median is less sensitive to outliers than the mean."
    },
    choices: [
      {
        ru: "Median менее чувствительна к выбросам, чем mean.",
        en: "The median is less sensitive to outliers than the mean."
      },
      {
        ru: "Median удаляет все строки.",
        en: "The median removes all rows."
      },
      {
        ru: "Median превращает категории в числа.",
        en: "The median converts categories into numbers."
      },
      {
        ru: "Median нужна только для text classification.",
        en: "The median is needed only for text classification."
      }
    ],
    explain: {
      ru: "На защите можно сказать: `I used median imputation because the dataset is small and I did not want to drop rows.`",
      en: "In the exam: `I used median imputation because the dataset is small and I did not want to drop rows.`"
    }
  },
  {
    id: 20,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Почему KNN особенно требует scaling?",
      en: "Why does KNN especially require scaling?"
    },
    answer: {
      ru: "Потому что KNN основан на расстояниях, и признаки с большим масштабом могут доминировать.",
      en: "Because KNN is distance-based, and large-scale features can dominate distances."
    },
    choices: [
      {
        ru: "Потому что KNN основан на расстояниях, и признаки с большим масштабом могут доминировать.",
        en: "Because KNN is distance-based, and large-scale features can dominate distances."
      },
      {
        ru: "Потому что KNN является деревом решений.",
        en: "Because KNN is a decision tree."
      },
      {
        ru: "Потому что KNN не умеет multi-class classification.",
        en: "Because KNN cannot do multi-class classification."
      },
      {
        ru: "Потому что scaling заменяет train-test split.",
        en: "Because scaling replaces train-test split."
      }
    ],
    explain: {
      ru: "`body_mass_g` имеет масштаб тысяч, а `bill_length_mm` десятков; без scaling масса может задавить остальные признаки.",
      en: "`body_mass_g` is in thousands, while `bill_length_mm` is in tens; without scaling, body mass can dominate."
    }
  },
  {
    id: 21,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Почему для `island` и `sex` лучше one-hot encoding, а не label encoding?",
      en: "Why is one-hot encoding better than label encoding for `island` and `sex`?"
    },
    answer: {
      ru: "Потому что эти категории не имеют естественного порядка.",
      en: "Because these categories do not have a natural order."
    },
    choices: [
      {
        ru: "Потому что эти категории не имеют естественного порядка.",
        en: "Because these categories do not have a natural order."
      },
      {
        ru: "Потому что one-hot encoding удаляет target.",
        en: "Because one-hot encoding removes the target."
      },
      {
        ru: "Потому что label encoding невозможен в Python.",
        en: "Because label encoding is impossible in Python."
      },
      {
        ru: "Потому что one-hot encoding всегда уменьшает количество столбцов.",
        en: "Because one-hot encoding always reduces the number of columns."
      }
    ],
    explain: {
      ru: "Label encoding может создать ложный порядок: island 0 < island 1 < island 2.",
      en: "Label encoding can create a false order: island 0 < island 1 < island 2."
    }
  },
  {
    id: 22,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Зачем использовать Pipeline?",
      en: "Why use a Pipeline?"
    },
    answer: {
      ru: "Чтобы объединить preprocessing и модель в один воспроизводимый процесс без leakage.",
      en: "To combine preprocessing and the model into one reproducible process and reduce leakage risk."
    },
    choices: [
      {
        ru: "Чтобы объединить preprocessing и модель в один воспроизводимый процесс без leakage.",
        en: "To combine preprocessing and the model into one reproducible process and reduce leakage risk."
      },
      {
        ru: "Чтобы заменить EDA.",
        en: "To replace EDA."
      },
      {
        ru: "Чтобы получить только картинки.",
        en: "To get only plots."
      },
      {
        ru: "Чтобы не делить данные на train и test.",
        en: "To avoid splitting data into train and test."
      }
    ],
    explain: {
      ru: "Pipeline помогает применять одинаковые steps к train и test корректно.",
      en: "A Pipeline helps apply the same steps correctly to train and test data."
    }
  },
  {
    id: 23,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Зачем нужен train-test split?",
      en: "Why do we need a train-test split?"
    },
    answer: {
      ru: "Чтобы обучить модель на train и проверить ее на unseen test data.",
      en: "To train the model on train data and evaluate it on unseen test data."
    },
    choices: [
      {
        ru: "Чтобы обучить модель на train и проверить ее на unseen test data.",
        en: "To train the model on train data and evaluate it on unseen test data."
      },
      {
        ru: "Чтобы модель видела test data во время обучения.",
        en: "To let the model see test data during training."
      },
      {
        ru: "Чтобы заменить target variable.",
        en: "To replace the target variable."
      },
      {
        ru: "Чтобы убрать все categorical features.",
        en: "To remove all categorical features."
      }
    ],
    explain: {
      ru: "Test set имитирует новые данные и оценивает generalization.",
      en: "The test set simulates new data and estimates generalization."
    }
  },
  {
    id: 24,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Почему в проекте использован `stratify=y`?",
      en: "Why was `stratify=y` used in the project?"
    },
    answer: {
      ru: "Чтобы сохранить похожие пропорции классов в train и test.",
      en: "To keep similar class proportions in train and test sets."
    },
    choices: [
      {
        ru: "Чтобы сохранить похожие пропорции классов в train и test.",
        en: "To keep similar class proportions in train and test sets."
      },
      {
        ru: "Чтобы перемешать названия столбцов.",
        en: "To shuffle column names."
      },
      {
        ru: "Чтобы удалить меньший класс.",
        en: "To remove the minority class."
      },
      {
        ru: "Чтобы сделать model ensemble.",
        en: "To create a model ensemble."
      }
    ],
    explain: {
      ru: "Это важно, потому что Chinstrap меньше, чем Adelie и Gentoo.",
      en: "This is important because Chinstrap is smaller than Adelie and Gentoo."
    }
  },
  {
    id: 25,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Что такое cross-validation?",
      en: "What is cross-validation?"
    },
    answer: {
      ru: "Проверка модели на нескольких train-test splits для более устойчивой оценки.",
      en: "Evaluating a model across several train-test splits for a more stable estimate."
    },
    choices: [
      {
        ru: "Проверка модели на нескольких train-test splits для более устойчивой оценки.",
        en: "Evaluating a model across several train-test splits for a more stable estimate."
      },
      {
        ru: "Метод заполнения пропусков.",
        en: "A missing-value imputation method."
      },
      {
        ru: "График распределения классов.",
        en: "A class distribution plot."
      },
      {
        ru: "Тип one-hot encoding.",
        en: "A type of one-hot encoding."
      }
    ],
    explain: {
      ru: "Для маленького датасета это сильное улучшение защиты проекта.",
      en: "For a small dataset, this is a strong improvement to the project defense."
    }
  },
  {
    id: 26,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Почему 100% accuracy на test split не доказывает идеальную модель?",
      en: "Why does 100% accuracy on one test split not prove a perfect model?"
    },
    answer: {
      ru: "Потому что датасет маленький, и один split может быть удачным.",
      en: "Because the dataset is small, and one split can be lucky."
    },
    choices: [
      {
        ru: "Потому что датасет маленький, и один split может быть удачным.",
        en: "Because the dataset is small, and one split can be lucky."
      },
      {
        ru: "Потому что accuracy всегда запрещена.",
        en: "Because accuracy is always forbidden."
      },
      {
        ru: "Потому что Logistic Regression не бывает классификатором.",
        en: "Because Logistic Regression is never a classifier."
      },
      {
        ru: "Потому что target variable неизвестна.",
        en: "Because the target variable is unknown."
      }
    ],
    explain: {
      ru: "Правильная фраза: `Cross-validation would make the estimate more robust.`",
      en: "The right phrase is: `Cross-validation would make the estimate more robust.`"
    }
  },
  {
    id: 27,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Что такое data leakage?",
      en: "What is data leakage?"
    },
    answer: {
      ru: "Ситуация, когда информация из test/validation data случайно влияет на обучение.",
      en: "A situation where information from test or validation data accidentally influences training."
    },
    choices: [
      {
        ru: "Ситуация, когда информация из test/validation data случайно влияет на обучение.",
        en: "A situation where information from test or validation data accidentally influences training."
      },
      {
        ru: "Ситуация, когда model accuracy низкая.",
        en: "A situation where model accuracy is low."
      },
      {
        ru: "Ситуация, когда нет categorical features.",
        en: "A situation where there are no categorical features."
      },
      {
        ru: "Ситуация, когда график слишком большой.",
        en: "A situation where a plot is too large."
      }
    ],
    explain: {
      ru: "Leakage делает оценку качества слишком оптимистичной.",
      en: "Leakage makes model evaluation too optimistic."
    }
  },
  {
    id: 28,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Как правильно применять SMOTE при cross-validation?",
      en: "How should SMOTE be applied with cross-validation?"
    },
    answer: {
      ru: "Только внутри training fold, не до разбиения.",
      en: "Only inside the training fold, not before splitting."
    },
    choices: [
      {
        ru: "Только внутри training fold, не до разбиения.",
        en: "Only inside the training fold, not before splitting."
      },
      {
        ru: "На всем dataset до train-test split.",
        en: "On the whole dataset before train-test split."
      },
      {
        ru: "Только на test fold.",
        en: "Only on the test fold."
      },
      {
        ru: "После подсчета final accuracy.",
        en: "After calculating final accuracy."
      }
    ],
    explain: {
      ru: "Иначе synthetic samples могут создать leakage между train и validation.",
      en: "Otherwise synthetic samples can create leakage between train and validation."
    }
  },
  {
    id: 29,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Почему Logistic Regression подходит для этого проекта?",
      en: "Why is Logistic Regression suitable for this project?"
    },
    answer: {
      ru: "Потому что классы хорошо разделяются признаками, и простой baseline уже может быть сильным.",
      en: "Because the classes are well separated by features, so a simple baseline can already be strong."
    },
    choices: [
      {
        ru: "Потому что классы хорошо разделяются признаками, и простой baseline уже может быть сильным.",
        en: "Because the classes are well separated by features, so a simple baseline can already be strong."
      },
      {
        ru: "Потому что Logistic Regression работает только с текстом.",
        en: "Because Logistic Regression works only with text."
      },
      {
        ru: "Потому что она не требует target variable.",
        en: "Because it does not require a target variable."
      },
      {
        ru: "Потому что она является unsupervised clustering.",
        en: "Because it is unsupervised clustering."
      }
    ],
    explain: {
      ru: "Несмотря на слово regression, Logistic Regression часто используется для classification.",
      en: "Despite the word regression, Logistic Regression is often used for classification."
    }
  },
  {
    id: 30,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Что предсказывает Logistic Regression в classification?",
      en: "What does Logistic Regression predict in classification?"
    },
    answer: {
      ru: "Вероятности классов, после чего выбирается самый вероятный класс.",
      en: "Class probabilities, then the most probable class is selected."
    },
    choices: [
      {
        ru: "Вероятности классов, после чего выбирается самый вероятный класс.",
        en: "Class probabilities, then the most probable class is selected."
      },
      {
        ru: "Только continuous numerical value.",
        en: "Only a continuous numerical value."
      },
      {
        ru: "Только количество строк.",
        en: "Only the number of rows."
      },
      {
        ru: "Только missing values.",
        en: "Only missing values."
      }
    ],
    explain: {
      ru: "Для multi-class sklearn выбирает один из классов species.",
      en: "For multi-class classification, sklearn selects one of the species classes."
    }
  },
  {
    id: 31,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Как работает KNN?",
      en: "How does KNN work?"
    },
    answer: {
      ru: "Он смотрит на k ближайших соседей и выбирает класс большинства.",
      en: "It looks at the k nearest neighbors and chooses the majority class."
    },
    choices: [
      {
        ru: "Он смотрит на k ближайших соседей и выбирает класс большинства.",
        en: "It looks at the k nearest neighbors and chooses the majority class."
      },
      {
        ru: "Он строит много деревьев и голосует.",
        en: "It builds many trees and votes."
      },
      {
        ru: "Он всегда обучает neural network.",
        en: "It always trains a neural network."
      },
      {
        ru: "Он удаляет все categorical features.",
        en: "It removes all categorical features."
      }
    ],
    explain: {
      ru: "KNN логичен здесь: пингвины одного вида часто близки по физическим признакам.",
      en: "KNN makes sense here because penguins of the same species are often close in physical features."
    }
  },
  {
    id: 32,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Какие слабые стороны у KNN?",
      en: "What are weaknesses of KNN?"
    },
    answer: {
      ru: "Он чувствителен к scaling, noise, irrelevant features и выбору k.",
      en: "It is sensitive to scaling, noise, irrelevant features, and the choice of k."
    },
    choices: [
      {
        ru: "Он чувствителен к scaling, noise, irrelevant features и выбору k.",
        en: "It is sensitive to scaling, noise, irrelevant features, and the choice of k."
      },
      {
        ru: "Он не использует расстояния.",
        en: "It does not use distances."
      },
      {
        ru: "Он всегда полностью интерпретируем.",
        en: "It is always fully interpretable."
      },
      {
        ru: "Он невозможен для multi-class tasks.",
        en: "It is impossible for multi-class tasks."
      }
    ],
    explain: {
      ru: "На защите стоит связать это со StandardScaler.",
      en: "In the defense, connect this to StandardScaler."
    }
  },
  {
    id: 33,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Как работает Decision Tree?",
      en: "How does a Decision Tree work?"
    },
    answer: {
      ru: "Делит данные последовательностью правил по признакам.",
      en: "It splits the data using a sequence of feature-based rules."
    },
    choices: [
      {
        ru: "Делит данные последовательностью правил по признакам.",
        en: "It splits the data using a sequence of feature-based rules."
      },
      {
        ru: "Считает только Euclidean distance.",
        en: "It calculates only Euclidean distance."
      },
      {
        ru: "Кодирует категории в dummy variables.",
        en: "It encodes categories into dummy variables."
      },
      {
        ru: "Проверяет только class balance.",
        en: "It checks only class balance."
      }
    ],
    explain: {
      ru: "Decision Tree легко объяснять: если признак меньше/больше порога, идем в другую ветку.",
      en: "A Decision Tree is easy to explain: if a feature is below or above a threshold, move to another branch."
    }
  },
  {
    id: 34,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Главный риск Decision Tree на маленьком датасете?",
      en: "What is the main risk of a Decision Tree on a small dataset?"
    },
    answer: {
      ru: "Overfitting.",
      en: "Overfitting."
    },
    choices: [
      {
        ru: "Overfitting.",
        en: "Overfitting."
      },
      {
        ru: "One-hot encoding.",
        en: "One-hot encoding."
      },
      {
        ru: "Class labels.",
        en: "Class labels."
      },
      {
        ru: "Exploratory Data Analysis.",
        en: "Exploratory Data Analysis."
      }
    ],
    explain: {
      ru: "Дерево может слишком точно выучить детали train data, поэтому `max_depth=4` ограничивает сложность.",
      en: "A tree can learn training details too specifically, so `max_depth=4` limits complexity."
    }
  },
  {
    id: 35,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Почему не обязательно использовать neural network для Palmer Penguins?",
      en: "Why is a neural network not necessary for Palmer Penguins?"
    },
    answer: {
      ru: "Датасет маленький, табличный и простые модели уже дают высокий результат.",
      en: "The dataset is small and tabular, and simple models already perform very well."
    },
    choices: [
      {
        ru: "Датасет маленький, табличный и простые модели уже дают высокий результат.",
        en: "The dataset is small and tabular, and simple models already perform very well."
      },
      {
        ru: "Neural networks запрещены для classification.",
        en: "Neural networks are forbidden for classification."
      },
      {
        ru: "В датасете нет target variable.",
        en: "There is no target variable in the dataset."
      },
      {
        ru: "Neural network всегда хуже KNN.",
        en: "A neural network is always worse than KNN."
      }
    ],
    explain: {
      ru: "Хороший ответ: `A neural network would add complexity without clear benefit.`",
      en: "Good answer: `A neural network would add complexity without clear benefit.`"
    }
  },
  {
    id: 36,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Почему clustering не является основной задачей проекта?",
      en: "Why is clustering not the main task of the project?"
    },
    answer: {
      ru: "Потому что labels уже известны, а цель - supervised classification.",
      en: "Because labels are already known, and the goal is supervised classification."
    },
    choices: [
      {
        ru: "Потому что labels уже известны, а цель - supervised classification.",
        en: "Because labels are already known, and the goal is supervised classification."
      },
      {
        ru: "Потому что clustering требует больше классов.",
        en: "Because clustering requires more classes."
      },
      {
        ru: "Потому что clustering работает только с текстом.",
        en: "Because clustering works only with text."
      },
      {
        ru: "Потому что clustering является метрикой.",
        en: "Because clustering is a metric."
      }
    ],
    explain: {
      ru: "Clustering можно упомянуть как extension, если бы labels не были известны.",
      en: "Clustering can be mentioned as an extension if labels were unknown."
    }
  },
  {
    id: 37,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Что такое ensemble methods?",
      en: "What are ensemble methods?"
    },
    answer: {
      ru: "Методы, которые объединяют несколько моделей для более сильного и стабильного предсказания.",
      en: "Methods that combine several models to make a stronger and more stable prediction."
    },
    choices: [
      {
        ru: "Методы, которые объединяют несколько моделей для более сильного и стабильного предсказания.",
        en: "Methods that combine several models to make a stronger and more stable prediction."
      },
      {
        ru: "Методы, которые удаляют все модели кроме одной.",
        en: "Methods that remove all models except one."
      },
      {
        ru: "Методы только для EDA-графиков.",
        en: "Methods only for EDA plots."
      },
      {
        ru: "Методы только для заполнения пропусков.",
        en: "Methods only for filling missing values."
      }
    ],
    explain: {
      ru: "Это второй явно названный провал в фидбеке преподавателя.",
      en: "This was the second explicitly mentioned weak point in the teacher's feedback."
    }
  },
  {
    id: 38,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Назови примеры ensemble methods.",
      en: "Name examples of ensemble methods."
    },
    answer: {
      ru: "Random Forest, Bagging, Boosting, Gradient Boosting, XGBoost.",
      en: "Random Forest, Bagging, Boosting, Gradient Boosting, XGBoost."
    },
    choices: [
      {
        ru: "Random Forest, Bagging, Boosting, Gradient Boosting, XGBoost.",
        en: "Random Forest, Bagging, Boosting, Gradient Boosting, XGBoost."
      },
      {
        ru: "Only StandardScaler и SimpleImputer.",
        en: "Only StandardScaler and SimpleImputer."
      },
      {
        ru: "Only train-test split и `df.info()`.",
        en: "Only train-test split and `df.info()`."
      },
      {
        ru: "Only accuracy и recall.",
        en: "Only accuracy and recall."
      }
    ],
    explain: {
      ru: "Минимум надо уверенно назвать Random Forest, Bagging и Boosting.",
      en: "At minimum, confidently name Random Forest, Bagging, and Boosting."
    }
  },
  {
    id: 39,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Random Forest - это supervised метод?",
      en: "Is Random Forest a supervised method?"
    },
    answer: {
      ru: "Да, Random Forest - supervised ensemble method.",
      en: "Yes, Random Forest is a supervised ensemble method."
    },
    choices: [
      {
        ru: "Да, Random Forest - supervised ensemble method.",
        en: "Yes, Random Forest is a supervised ensemble method."
      },
      {
        ru: "Нет, это всегда unsupervised clustering.",
        en: "No, it is always unsupervised clustering."
      },
      {
        ru: "Нет, это только preprocessing step.",
        en: "No, it is only a preprocessing step."
      },
      {
        ru: "Нет, это metric.",
        en: "No, it is a metric."
      }
    ],
    explain: {
      ru: "Для classification он учится на labeled data и предсказывает class label.",
      en: "For classification, it learns from labeled data and predicts a class label."
    }
  },
  {
    id: 40,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Как работает Random Forest?",
      en: "How does Random Forest work?"
    },
    answer: {
      ru: "Он обучает много decision trees на случайных samples/features, затем деревья голосуют.",
      en: "It trains many decision trees on random samples and features, then the trees vote."
    },
    choices: [
      {
        ru: "Он обучает много decision trees на случайных samples/features, затем деревья голосуют.",
        en: "It trains many decision trees on random samples and features, then the trees vote."
      },
      {
        ru: "Он строит один linear boundary без деревьев.",
        en: "It builds one linear boundary without trees."
      },
      {
        ru: "Он только масштабирует признаки.",
        en: "It only scales features."
      },
      {
        ru: "Он только считает NaN.",
        en: "It only counts NaN values."
      }
    ],
    explain: {
      ru: "Ключевые слова для защиты: many trees, random samples, random features, majority vote.",
      en: "Key words for the defense: many trees, random samples, random features, majority vote."
    }
  },
  {
    id: 41,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Что такое bagging?",
      en: "What is bagging?"
    },
    answer: {
      ru: "Обучение многих моделей независимо на bootstrap samples и объединение ответов.",
      en: "Training many models independently on bootstrap samples and combining their predictions."
    },
    choices: [
      {
        ru: "Обучение многих моделей независимо на bootstrap samples и объединение ответов.",
        en: "Training many models independently on bootstrap samples and combining their predictions."
      },
      {
        ru: "Последовательное исправление ошибок предыдущей модели.",
        en: "Sequentially correcting errors of the previous model."
      },
      {
        ru: "Заполнение NaN медианой.",
        en: "Filling NaN values with the median."
      },
      {
        ru: "Разбиение данных без target.",
        en: "Splitting data without a target."
      }
    ],
    explain: {
      ru: "Random Forest - главный пример bagging with decision trees.",
      en: "Random Forest is the main example of bagging with decision trees."
    }
  },
  {
    id: 42,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Что такое boosting?",
      en: "What is boosting?"
    },
    answer: {
      ru: "Последовательное обучение моделей, где новая модель исправляет ошибки предыдущих.",
      en: "Sequential training where each new model focuses on correcting previous errors."
    },
    choices: [
      {
        ru: "Последовательное обучение моделей, где новая модель исправляет ошибки предыдущих.",
        en: "Sequential training where each new model focuses on correcting previous errors."
      },
      {
        ru: "Независимое обучение моделей только на bootstrap samples.",
        en: "Independent model training only on bootstrap samples."
      },
      {
        ru: "Только one-hot encoding категорий.",
        en: "Only one-hot encoding of categories."
      },
      {
        ru: "Только построение scatter plot.",
        en: "Only building a scatter plot."
      }
    ],
    explain: {
      ru: "Примеры: AdaBoost, Gradient Boosting, XGBoost.",
      en: "Examples: AdaBoost, Gradient Boosting, XGBoost."
    }
  },
  {
    id: 43,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Почему Random Forest может быть лучше одного Decision Tree?",
      en: "Why can Random Forest be better than a single Decision Tree?"
    },
    answer: {
      ru: "Он снижает variance и делает предсказание стабильнее за счет голосования многих деревьев.",
      en: "It reduces variance and makes prediction more stable by voting across many trees."
    },
    choices: [
      {
        ru: "Он снижает variance и делает предсказание стабильнее за счет голосования многих деревьев.",
        en: "It reduces variance and makes prediction more stable by voting across many trees."
      },
      {
        ru: "Он всегда полностью заменяет train-test split.",
        en: "It always fully replaces train-test split."
      },
      {
        ru: "Он делает EDA ненужным.",
        en: "It makes EDA unnecessary."
      },
      {
        ru: "Он не требует признаков.",
        en: "It does not need features."
      }
    ],
    explain: {
      ru: "Одно дерево нестабильно; лес усредняет/голосует по многим деревьям.",
      en: "One tree is unstable; a forest averages or votes across many trees."
    }
  },
  {
    id: 44,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Нужно ли обязательно добавлять Random Forest в этот проект?",
      en: "Is it strictly necessary to add Random Forest to this project?"
    },
    answer: {
      ru: "Не обязательно, но это хорошее расширение, потому что ensemble methods спрашивали на защите.",
      en: "Not strictly, but it is a good extension because ensemble methods were asked in the defense."
    },
    choices: [
      {
        ru: "Не обязательно, но это хорошее расширение, потому что ensemble methods спрашивали на защите.",
        en: "Not strictly, but it is a good extension because ensemble methods were asked in the defense."
      },
      {
        ru: "Да, иначе classification невозможна.",
        en: "Yes, otherwise classification is impossible."
      },
      {
        ru: "Нет, ensembles запрещены для табличных данных.",
        en: "No, ensembles are forbidden for tabular data."
      },
      {
        ru: "Нет, потому что Random Forest является metric.",
        en: "No, because Random Forest is a metric."
      }
    ],
    explain: {
      ru: "Проект уже работает, но Random Forest закрывает пробел по course content.",
      en: "The project already works, but Random Forest closes the course-content gap."
    }
  },
  {
    id: 45,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что такое accuracy?",
      en: "What is accuracy?"
    },
    answer: {
      ru: "Доля правильных предсказаний среди всех предсказаний.",
      en: "The proportion of correct predictions among all predictions."
    },
    choices: [
      {
        ru: "Доля правильных предсказаний среди всех предсказаний.",
        en: "The proportion of correct predictions among all predictions."
      },
      {
        ru: "Доля найденных объектов конкретного класса.",
        en: "The proportion of found examples of a specific class."
      },
      {
        ru: "Таблица ошибок по классам.",
        en: "A table of errors by class."
      },
      {
        ru: "Количество пропусков.",
        en: "The number of missing values."
      }
    ],
    explain: {
      ru: "В проекте Logistic Regression получила accuracy 1.0 на test split.",
      en: "In the project, Logistic Regression reached 1.0 accuracy on the test split."
    }
  },
  {
    id: 46,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Почему accuracy может быть недостаточной при imbalance?",
      en: "Why can accuracy be insufficient with imbalance?"
    },
    answer: {
      ru: "Она может скрывать плохое качество на меньшем классе.",
      en: "It can hide poor performance on the minority class."
    },
    choices: [
      {
        ru: "Она может скрывать плохое качество на меньшем классе.",
        en: "It can hide poor performance on the minority class."
      },
      {
        ru: "Она не считается для classification.",
        en: "It cannot be used for classification."
      },
      {
        ru: "Она всегда равна weighted F1.",
        en: "It is always equal to weighted F1."
      },
      {
        ru: "Она показывает только пропуски.",
        en: "It shows only missing values."
      }
    ],
    explain: {
      ru: "Если один класс маленький, модель может хорошо выглядеть overall, но ошибаться на нем.",
      en: "If one class is small, the model can look good overall but fail on that class."
    }
  },
  {
    id: 47,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что показывает confusion matrix?",
      en: "What does a confusion matrix show?"
    },
    answer: {
      ru: "Сравнение true labels и predicted labels по каждому классу.",
      en: "A comparison of true labels and predicted labels for each class."
    },
    choices: [
      {
        ru: "Сравнение true labels и predicted labels по каждому классу.",
        en: "A comparison of true labels and predicted labels for each class."
      },
      {
        ru: "Только среднее значение признаков.",
        en: "Only the mean of features."
      },
      {
        ru: "Только структуру Pipeline.",
        en: "Only the Pipeline structure."
      },
      {
        ru: "Только результат one-hot encoding.",
        en: "Only the result of one-hot encoding."
      }
    ],
    explain: {
      ru: "Диагональ - правильные предсказания, вне диагонали - ошибки.",
      en: "The diagonal contains correct predictions; off-diagonal cells are mistakes."
    }
  },
  {
    id: 48,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что такое precision?",
      en: "What is precision?"
    },
    answer: {
      ru: "Из всех объектов, предсказанных как класс, сколько действительно были этим классом.",
      en: "Of all examples predicted as a class, how many truly belonged to that class."
    },
    choices: [
      {
        ru: "Из всех объектов, предсказанных как класс, сколько действительно были этим классом.",
        en: "Of all examples predicted as a class, how many truly belonged to that class."
      },
      {
        ru: "Из всех настоящих объектов класса, сколько модель нашла.",
        en: "Of all true examples of a class, how many the model found."
      },
      {
        ru: "Сколько строк в dataset.",
        en: "How many rows are in the dataset."
      },
      {
        ru: "Сколько признаков закодировано.",
        en: "How many features are encoded."
      }
    ],
    explain: {
      ru: "Precision отвечает на вопрос: если модель сказала Chinstrap, как часто она права?",
      en: "Precision answers: if the model said Chinstrap, how often was it correct?"
    }
  },
  {
    id: 49,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что такое recall?",
      en: "What is recall?"
    },
    answer: {
      ru: "Из всех настоящих объектов класса, сколько модель правильно нашла.",
      en: "Of all true examples of a class, how many the model correctly found."
    },
    choices: [
      {
        ru: "Из всех настоящих объектов класса, сколько модель правильно нашла.",
        en: "Of all true examples of a class, how many the model correctly found."
      },
      {
        ru: "Из всех предсказаний класса, сколько были верными.",
        en: "Of all predictions for a class, how many were correct."
      },
      {
        ru: "Средняя масса пингвинов.",
        en: "Average penguin body mass."
      },
      {
        ru: "Количество features после one-hot encoding.",
        en: "Number of features after one-hot encoding."
      }
    ],
    explain: {
      ru: "Recall отвечает: из всех настоящих Chinstrap, сколько модель обнаружила?",
      en: "Recall answers: of all real Chinstrap examples, how many did the model detect?"
    }
  },
  {
    id: 50,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что такое F1-score?",
      en: "What is F1-score?"
    },
    answer: {
      ru: "Метрика, которая балансирует precision и recall.",
      en: "A metric that balances precision and recall."
    },
    choices: [
      {
        ru: "Метрика, которая балансирует precision и recall.",
        en: "A metric that balances precision and recall."
      },
      {
        ru: "Метрика, которая показывает только количество строк.",
        en: "A metric that shows only the number of rows."
      },
      {
        ru: "Метод заполнения пропусков.",
        en: "A missing-value imputation method."
      },
      {
        ru: "Тип Decision Tree.",
        en: "A type of Decision Tree."
      }
    ],
    explain: {
      ru: "F1 полезен, когда важны и false positives, и false negatives.",
      en: "F1 is useful when both false positives and false negatives matter."
    }
  },
  {
    id: 51,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что такое weighted F1?",
      en: "What is weighted F1?"
    },
    answer: {
      ru: "F1, усредненный по классам с учетом размера каждого класса.",
      en: "F1 averaged across classes while accounting for each class size."
    },
    choices: [
      {
        ru: "F1, усредненный по классам с учетом размера каждого класса.",
        en: "F1 averaged across classes while accounting for each class size."
      },
      {
        ru: "Accuracy без учета классов.",
        en: "Accuracy without class information."
      },
      {
        ru: "График зависимости признаков.",
        en: "A plot of feature relationships."
      },
      {
        ru: "Метод ансамблевого обучения.",
        en: "An ensemble learning method."
      }
    ],
    explain: {
      ru: "Он полезен, потому что классы Adelie, Gentoo и Chinstrap не одинакового размера.",
      en: "It is useful because Adelie, Gentoo, and Chinstrap are not the same size."
    }
  },
  {
    id: 52,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Как объяснить результат Logistic Regression `Accuracy: 1.0`?",
      en: "How should Andrey explain Logistic Regression `Accuracy: 1.0`?"
    },
    answer: {
      ru: "Модель идеально сработала на этом test split, но для надежности нужна cross-validation.",
      en: "The model worked perfectly on this test split, but cross-validation is needed for robustness."
    },
    choices: [
      {
        ru: "Модель идеально сработала на этом test split, но для надежности нужна cross-validation.",
        en: "The model worked perfectly on this test split, but cross-validation is needed for robustness."
      },
      {
        ru: "Это доказывает, что модель идеальна на любых данных.",
        en: "This proves the model is perfect on any data."
      },
      {
        ru: "Это значит, что EDA была не нужна.",
        en: "This means EDA was unnecessary."
      },
      {
        ru: "Это значит, что target был удален.",
        en: "This means the target was removed."
      }
    ],
    explain: {
      ru: "На защите важно звучать осторожно: strong result, but small dataset.",
      en: "In the defense, sound careful: strong result, but small dataset."
    }
  },
  {
    id: 53,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое generalization?",
      en: "What is generalization?"
    },
    answer: {
      ru: "Способность модели хорошо работать на новых unseen data.",
      en: "The ability of a model to perform well on new unseen data."
    },
    choices: [
      {
        ru: "Способность модели хорошо работать на новых unseen data.",
        en: "The ability of a model to perform well on new unseen data."
      },
      {
        ru: "Способность запомнить train data идеально.",
        en: "The ability to memorize train data perfectly."
      },
      {
        ru: "Количество категорий после one-hot encoding.",
        en: "The number of categories after one-hot encoding."
      },
      {
        ru: "Тип scatter plot.",
        en: "A type of scatter plot."
      }
    ],
    explain: {
      ru: "Цель ML - не запомнить train, а хорошо работать на новых данных.",
      en: "The goal of ML is not to memorize train data, but to work well on new data."
    }
  },
  {
    id: 54,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое overfitting?",
      en: "What is overfitting?"
    },
    answer: {
      ru: "Когда модель слишком сильно выучила train data и хуже обобщает на новые данные.",
      en: "When a model learns train data too specifically and generalizes worse to new data."
    },
    choices: [
      {
        ru: "Когда модель слишком сильно выучила train data и хуже обобщает на новые данные.",
        en: "When a model learns train data too specifically and generalizes worse to new data."
      },
      {
        ru: "Когда модель слишком простая и не видит закономерности.",
        en: "When a model is too simple to learn the pattern."
      },
      {
        ru: "Когда нет пропусков.",
        en: "When there are no missing values."
      },
      {
        ru: "Когда классы идеально сбалансированы.",
        en: "When classes are perfectly balanced."
      }
    ],
    explain: {
      ru: "Decision Tree имеет больший риск overfitting, особенно на маленьком dataset.",
      en: "Decision Tree has a higher overfitting risk, especially on a small dataset."
    }
  },
  {
    id: 55,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое underfitting?",
      en: "What is underfitting?"
    },
    answer: {
      ru: "Когда модель слишком простая и плохо работает и на train, и на test.",
      en: "When a model is too simple and performs poorly on both train and test data."
    },
    choices: [
      {
        ru: "Когда модель слишком простая и плохо работает и на train, и на test.",
        en: "When a model is too simple and performs poorly on both train and test data."
      },
      {
        ru: "Когда модель идеально запоминает noise.",
        en: "When a model memorizes noise perfectly."
      },
      {
        ru: "Когда используется StandardScaler.",
        en: "When StandardScaler is used."
      },
      {
        ru: "Когда confusion matrix диагональная.",
        en: "When the confusion matrix is diagonal."
      }
    ],
    explain: {
      ru: "В проекте underfitting не является главной проблемой, потому что модели показали высокий score.",
      en: "In this project, underfitting is not the main issue because models achieved high scores."
    }
  },
  {
    id: 56,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое bias-variance tradeoff?",
      en: "What is the bias-variance tradeoff?"
    },
    answer: {
      ru: "Баланс между слишком простой моделью и слишком чувствительной к данным моделью.",
      en: "The balance between a model that is too simple and a model that is too sensitive to data."
    },
    choices: [
      {
        ru: "Баланс между слишком простой моделью и слишком чувствительной к данным моделью.",
        en: "The balance between a model that is too simple and a model that is too sensitive to data."
      },
      {
        ru: "Баланс между числовыми и категориальными столбцами.",
        en: "The balance between numerical and categorical columns."
      },
      {
        ru: "Выбор между pie chart и boxplot.",
        en: "The choice between pie chart and boxplot."
      },
      {
        ru: "Проверка количества строк.",
        en: "Checking the number of rows."
      }
    ],
    explain: {
      ru: "Logistic Regression обычно проще; Decision Tree гибче; Random Forest снижает variance дерева.",
      en: "Logistic Regression is usually simpler; Decision Tree is more flexible; Random Forest reduces tree variance."
    }
  },
  {
    id: 57,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое classification?",
      en: "What is classification?"
    },
    answer: {
      ru: "ML-задача, где модель предсказывает категорию или класс.",
      en: "An ML task where the model predicts a category or class."
    },
    choices: [
      {
        ru: "ML-задача, где модель предсказывает категорию или класс.",
        en: "An ML task where the model predicts a category or class."
      },
      {
        ru: "ML-задача, где модель предсказывает continuous number.",
        en: "An ML task where the model predicts a continuous number."
      },
      {
        ru: "Метод удаления NaN.",
        en: "A method for removing NaN values."
      },
      {
        ru: "Тип автоматического EDA.",
        en: "A type of automatic EDA."
      }
    ],
    explain: {
      ru: "В этом проекте классы - виды пингвинов.",
      en: "In this project, the classes are penguin species."
    }
  },
  {
    id: 58,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое regression?",
      en: "What is regression?"
    },
    answer: {
      ru: "ML-задача, где модель предсказывает continuous numerical value.",
      en: "An ML task where the model predicts a continuous numerical value."
    },
    choices: [
      {
        ru: "ML-задача, где модель предсказывает continuous numerical value.",
        en: "An ML task where the model predicts a continuous numerical value."
      },
      {
        ru: "ML-задача, где модель предсказывает species.",
        en: "An ML task where the model predicts species."
      },
      {
        ru: "Метод построения confusion matrix.",
        en: "A method for building a confusion matrix."
      },
      {
        ru: "Тип ensemble voting.",
        en: "A type of ensemble voting."
      }
    ],
    explain: {
      ru: "Например, предсказание `body_mass_g` было бы regression, но species - classification.",
      en: "For example, predicting `body_mass_g` would be regression, but species is classification."
    }
  },
  {
    id: 59,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое class imbalance?",
      en: "What is class imbalance?"
    },
    answer: {
      ru: "Когда классы представлены разным количеством наблюдений.",
      en: "When classes are represented by different numbers of observations."
    },
    choices: [
      {
        ru: "Когда классы представлены разным количеством наблюдений.",
        en: "When classes are represented by different numbers of observations."
      },
      {
        ru: "Когда все классы имеют одинаковый размер.",
        en: "When all classes have the same size."
      },
      {
        ru: "Когда все признаки числовые.",
        en: "When all features are numerical."
      },
      {
        ru: "Когда используется Pipeline.",
        en: "When Pipeline is used."
      }
    ],
    explain: {
      ru: "В Palmer Penguins Chinstrap меньше, чем Adelie и Gentoo.",
      en: "In Palmer Penguins, Chinstrap is smaller than Adelie and Gentoo."
    }
  },
  {
    id: 60,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое SMOTE?",
      en: "What is SMOTE?"
    },
    answer: {
      ru: "Oversampling method, который создает synthetic minority examples.",
      en: "An oversampling method that creates synthetic minority examples."
    },
    choices: [
      {
        ru: "Oversampling method, который создает synthetic minority examples.",
        en: "An oversampling method that creates synthetic minority examples."
      },
      {
        ru: "Метод scaling числовых признаков.",
        en: "A method for scaling numerical features."
      },
      {
        ru: "Тип confusion matrix.",
        en: "A type of confusion matrix."
      },
      {
        ru: "Алгоритм Logistic Regression.",
        en: "A Logistic Regression algorithm."
      }
    ],
    explain: {
      ru: "SMOTE нужен не всегда; в проекте качество уже высокое, но термин надо знать.",
      en: "SMOTE is not always needed; in this project performance is already high, but the term should be known."
    }
  },
  {
    id: 61,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `What was your main mistake last time?`",
      en: "What should Andrey say if asked: `What was your main mistake last time?`"
    },
    answer: {
      ru: "I was not clear enough when explaining EDA and ensemble methods, so I reviewed these topics carefully.",
      en: "I was not clear enough when explaining EDA and ensemble methods, so I reviewed these topics carefully."
    },
    choices: [
      {
        ru: "I was not clear enough when explaining EDA and ensemble methods, so I reviewed these topics carefully.",
        en: "I was not clear enough when explaining EDA and ensemble methods, so I reviewed these topics carefully."
      },
      {
        ru: "The dataset was impossible and the questions were unrelated.",
        en: "The dataset was impossible and the questions were unrelated."
      },
      {
        ru: "I do not need to know course theory.",
        en: "I do not need to know course theory."
      },
      {
        ru: "The code matters, not the explanation.",
        en: "The code matters, not the explanation."
      }
    ],
    explain: {
      ru: "Нужен спокойный ответ без спора: признать пробел и показать, что он закрыт.",
      en: "Give a calm answer without arguing: acknowledge the gap and show it has been fixed."
    }
  },
  {
    id: 62,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Как объяснить, почему выбран простой датасет?",
      en: "How can Andrey explain choosing a simple dataset?"
    },
    answer: {
      ru: "It allows me to demonstrate the full ML pipeline clearly: EDA, preprocessing, training, evaluation, and interpretation.",
      en: "It allows me to demonstrate the full ML pipeline clearly: EDA, preprocessing, training, evaluation, and interpretation."
    },
    choices: [
      {
        ru: "It allows me to demonstrate the full ML pipeline clearly: EDA, preprocessing, training, evaluation, and interpretation.",
        en: "It allows me to demonstrate the full ML pipeline clearly: EDA, preprocessing, training, evaluation, and interpretation."
      },
      {
        ru: "Because I did not need to understand the theory.",
        en: "Because I did not need to understand the theory."
      },
      {
        ru: "Because it avoids all preprocessing.",
        en: "Because it avoids all preprocessing."
      },
      {
        ru: "Because it has no labels.",
        en: "Because it has no labels."
      }
    ],
    explain: {
      ru: "Это превращает слабость простого датасета в понятный учебный выбор.",
      en: "This turns the weakness of a simple dataset into a clear educational choice."
    }
  },
  {
    id: 63,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `Why did Logistic Regression perform best?`",
      en: "What should Andrey say if asked: `Why did Logistic Regression perform best?`"
    },
    answer: {
      ru: "Because EDA showed clear class separation, so a simple interpretable model was enough.",
      en: "Because EDA showed clear class separation, so a simple interpretable model was enough."
    },
    choices: [
      {
        ru: "Because EDA showed clear class separation, so a simple interpretable model was enough.",
        en: "Because EDA showed clear class separation, so a simple interpretable model was enough."
      },
      {
        ru: "Because Logistic Regression is always perfect.",
        en: "Because Logistic Regression is always perfect."
      },
      {
        ru: "Because the test set was used for training.",
        en: "Because the test set was used for training."
      },
      {
        ru: "Because the target was numerical.",
        en: "Because the target was numerical."
      }
    ],
    explain: {
      ru: "Ответ должен связывать EDA, separability и модель.",
      en: "The answer should connect EDA, separability, and the model."
    }
  },
  {
    id: 64,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `Why did you compare several models?`",
      en: "What should Andrey say if asked: `Why did you compare several models?`"
    },
    answer: {
      ru: "To test different classification logics and choose the most suitable model based on evaluation metrics.",
      en: "To test different classification logics and choose the most suitable model based on evaluation metrics."
    },
    choices: [
      {
        ru: "To test different classification logics and choose the most suitable model based on evaluation metrics.",
        en: "To test different classification logics and choose the most suitable model based on evaluation metrics."
      },
      {
        ru: "To make the notebook longer without reason.",
        en: "To make the notebook longer without reason."
      },
      {
        ru: "Because one model cannot do classification.",
        en: "Because one model cannot do classification."
      },
      {
        ru: "Because EDA requires three models.",
        en: "Because EDA requires three models."
      }
    ],
    explain: {
      ru: "В проекте сравниваются Logistic Regression, KNN и Decision Tree.",
      en: "The project compares Logistic Regression, KNN, and Decision Tree."
    }
  },
  {
    id: 65,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `Can we trust the result?`",
      en: "What should Andrey say if asked: `Can we trust the result?`"
    },
    answer: {
      ru: "We can trust it on this test split, but cross-validation would make the estimate more robust.",
      en: "We can trust it on this test split, but cross-validation would make the estimate more robust."
    },
    choices: [
      {
        ru: "We can trust it on this test split, but cross-validation would make the estimate more robust.",
        en: "We can trust it on this test split, but cross-validation would make the estimate more robust."
      },
      {
        ru: "We can trust it forever on any dataset.",
        en: "We can trust it forever on any dataset."
      },
      {
        ru: "We cannot evaluate classification models.",
        en: "We cannot evaluate classification models."
      },
      {
        ru: "Trust depends only on plot color.",
        en: "Trust depends only on plot color."
      }
    ],
    explain: {
      ru: "Это аккуратная позиция: не отрицать результат, но признать ограничение маленького датасета.",
      en: "This is a careful position: do not deny the result, but acknowledge the small-dataset limitation."
    }
  },
  {
    id: 66,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `What would you improve?`",
      en: "What should Andrey say if asked: `What would you improve?`"
    },
    answer: {
      ru: "I would add stratified cross-validation and an ensemble model such as Random Forest.",
      en: "I would add stratified cross-validation and an ensemble model such as Random Forest."
    },
    choices: [
      {
        ru: "I would add stratified cross-validation and an ensemble model such as Random Forest.",
        en: "I would add stratified cross-validation and an ensemble model such as Random Forest."
      },
      {
        ru: "I would remove EDA.",
        en: "I would remove EDA."
      },
      {
        ru: "I would train on the test set.",
        en: "I would train on the test set."
      },
      {
        ru: "I would ignore course topics.",
        en: "I would ignore course topics."
      }
    ],
    explain: {
      ru: "Это ровно закрывает замечания преподавателя: course content и robust evaluation.",
      en: "This directly addresses the teacher's feedback: course content and robust evaluation."
    }
  },
  {
    id: 67,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `Why not drop rows with missing values?`",
      en: "What should Andrey say if asked: `Why not drop rows with missing values?`"
    },
    answer: {
      ru: "Because the dataset is small, so imputation preserves more data for training and testing.",
      en: "Because the dataset is small, so imputation preserves more data for training and testing."
    },
    choices: [
      {
        ru: "Because the dataset is small, so imputation preserves more data for training and testing.",
        en: "Because the dataset is small, so imputation preserves more data for training and testing."
      },
      {
        ru: "Because missing values are the target.",
        en: "Because missing values are the target."
      },
      {
        ru: "Because rows cannot be removed in pandas.",
        en: "Because rows cannot be removed in pandas."
      },
      {
        ru: "Because imputation is an ensemble method.",
        en: "Because imputation is an ensemble method."
      }
    ],
    explain: {
      ru: "У Palmer Penguins всего 344 строки, поэтому сохранение данных имеет смысл.",
      en: "Palmer Penguins has only 344 rows, so preserving data makes sense."
    }
  },
  {
    id: 68,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `Which features were most useful?`",
      en: "What should Andrey say if asked: `Which features were most useful?`"
    },
    answer: {
      ru: "Bill measurements and body-size features were useful, which was visible in the EDA plots.",
      en: "Bill measurements and body-size features were useful, which was visible in the EDA plots."
    },
    choices: [
      {
        ru: "Bill measurements and body-size features were useful, which was visible in the EDA plots.",
        en: "Bill measurements and body-size features were useful, which was visible in the EDA plots."
      },
      {
        ru: "Only random_state was useful.",
        en: "Only random_state was useful."
      },
      {
        ru: "Only the index was useful.",
        en: "Only the index was useful."
      },
      {
        ru: "No feature was related to species.",
        en: "No feature was related to species."
      }
    ],
    explain: {
      ru: "Важно связать признаки с графиками и biological differences.",
      en: "It is important to connect features with plots and biological differences."
    }
  },
  {
    id: 69,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `What does the confusion matrix show in your result?`",
      en: "What should Andrey say if asked: `What does the confusion matrix show in your result?`"
    },
    answer: {
      ru: "It shows which species were predicted correctly and where the model confused classes.",
      en: "It shows which species were predicted correctly and where the model confused classes."
    },
    choices: [
      {
        ru: "It shows which species were predicted correctly and where the model confused classes.",
        en: "It shows which species were predicted correctly and where the model confused classes."
      },
      {
        ru: "It shows only missing values.",
        en: "It shows only missing values."
      },
      {
        ru: "It shows only feature scaling.",
        en: "It shows only feature scaling."
      },
      {
        ru: "It shows only the number of plots.",
        en: "It shows only the number of plots."
      }
    ],
    explain: {
      ru: "Для Logistic Regression в notebook матрица полностью диагональная.",
      en: "For Logistic Regression in the notebook, the matrix is fully diagonal."
    }
  },
  {
    id: 70,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что сказать, если спросят: `What is the role of EDA in your model choice?`",
      en: "What should Andrey say if asked: `What is the role of EDA in your model choice?`"
    },
    answer: {
      ru: "EDA showed that species are separable by physical features, so simple classifiers were reasonable.",
      en: "EDA showed that species are separable by physical features, so simple classifiers were reasonable."
    },
    choices: [
      {
        ru: "EDA showed that species are separable by physical features, so simple classifiers were reasonable.",
        en: "EDA showed that species are separable by physical features, so simple classifiers were reasonable."
      },
      {
        ru: "EDA automatically trained all models.",
        en: "EDA automatically trained all models."
      },
      {
        ru: "EDA replaced preprocessing.",
        en: "EDA replaced preprocessing."
      },
      {
        ru: "EDA proved that no test set was needed.",
        en: "EDA proved that no test set was needed."
      }
    ],
    explain: {
      ru: "Это хороший связный ответ: EDA -> separability -> model selection.",
      en: "This is a good connected answer: EDA -> separability -> model selection."
    }
  },
  {
    id: 71,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Какой самый безопасный ответ на вопрос про ensemble methods?",
      en: "What is the safest answer to a question about ensemble methods?"
    },
    answer: {
      ru: "Ensemble methods combine several models; Random Forest combines many decision trees and uses voting.",
      en: "Ensemble methods combine several models; Random Forest combines many decision trees and uses voting."
    },
    choices: [
      {
        ru: "Ensemble methods combine several models; Random Forest combines many decision trees and uses voting.",
        en: "Ensemble methods combine several models; Random Forest combines many decision trees and uses voting."
      },
      {
        ru: "Ensemble methods are the same as missing value imputation.",
        en: "Ensemble methods are the same as missing value imputation."
      },
      {
        ru: "Ensemble methods are only pie charts.",
        en: "Ensemble methods are only pie charts."
      },
      {
        ru: "Ensemble methods never use supervised learning.",
        en: "Ensemble methods never use supervised learning."
      }
    ],
    explain: {
      ru: "Эта фраза закрывает definition + example + mechanism.",
      en: "This sentence covers definition + example + mechanism."
    }
  },
  {
    id: 72,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Как закончить защиту, если просят общий вывод?",
      en: "How should Andrey finish if asked for a general conclusion?"
    },
    answer: {
      ru: "The project shows a complete supervised classification pipeline, and the strong results are supported by EDA and evaluation metrics.",
      en: "The project shows a complete supervised classification pipeline, and the strong results are supported by EDA and evaluation metrics."
    },
    choices: [
      {
        ru: "The project shows a complete supervised classification pipeline, and the strong results are supported by EDA and evaluation metrics.",
        en: "The project shows a complete supervised classification pipeline, and the strong results are supported by EDA and evaluation metrics."
      },
      {
        ru: "The project only shows random charts without a model.",
        en: "The project only shows random charts without a model."
      },
      {
        ru: "The project does not need interpretation.",
        en: "The project does not need interpretation."
      },
      {
        ru: "The project is unsupervised and has no labels.",
        en: "The project is unsupervised and has no labels."
      }
    ],
    explain: {
      ru: "Финальная фраза должна связывать pipeline, EDA, metrics и результат.",
      en: "The final sentence should connect the pipeline, EDA, metrics, and result."
    }
  },
  {
    id: 73,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Чем validation set отличается от test set?",
      en: "How is a validation set different from a test set?"
    },
    answer: {
      ru: "Validation set используют для выбора модели и tuning, а test set - для финальной независимой оценки.",
      en: "A validation set is used for model selection and tuning, while a test set is for final independent evaluation."
    },
    choices: [
      {
        ru: "Validation set используют для выбора модели и tuning, а test set - для финальной независимой оценки.",
        en: "A validation set is used for model selection and tuning, while a test set is for final independent evaluation."
      },
      {
        ru: "Validation set всегда содержит target, а test set никогда.",
        en: "A validation set always has a target, while a test set never does."
      },
      {
        ru: "Validation set нужен только для EDA-графиков.",
        en: "A validation set is needed only for EDA plots."
      },
      {
        ru: "Validation set и test set всегда одно и то же.",
        en: "A validation set and a test set are always the same thing."
      }
    ],
    explain: {
      ru: "Если использовать test set для выбора гиперпараметров, финальная оценка становится менее честной.",
      en: "If the test set is used to choose hyperparameters, the final estimate becomes less honest."
    }
  },
  {
    id: 74,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Что такое hyperparameter?",
      en: "What is a hyperparameter?"
    },
    answer: {
      ru: "Настройка, которую задают до обучения модели: `k`, `max_depth`, `n_estimators`, `C`.",
      en: "A setting chosen before training: `k`, `max_depth`, `n_estimators`, `C`."
    },
    choices: [
      {
        ru: "Настройка, которую задают до обучения модели: `k`, `max_depth`, `n_estimators`, `C`.",
        en: "A setting chosen before training: `k`, `max_depth`, `n_estimators`, `C`."
      },
      {
        ru: "Любой target label после предсказания.",
        en: "Any target label after prediction."
      },
      {
        ru: "Строка в confusion matrix.",
        en: "A row in the confusion matrix."
      },
      {
        ru: "Пропущенное значение в dataset.",
        en: "A missing value in the dataset."
      }
    ],
    explain: {
      ru: "Модель учит parameters из данных, а hyperparameters выбирает человек или поиск.",
      en: "The model learns parameters from data, while hyperparameters are chosen by a person or search procedure."
    }
  },
  {
    id: 75,
    topic: "Validation",
    visual: "assets/validation.svg",
    question: {
      ru: "Что делает GridSearchCV?",
      en: "What does GridSearchCV do?"
    },
    answer: {
      ru: "Перебирает сетку hyperparameters и оценивает варианты через cross-validation.",
      en: "It searches over a grid of hyperparameters and evaluates options with cross-validation."
    },
    choices: [
      {
        ru: "Перебирает сетку hyperparameters и оценивает варианты через cross-validation.",
        en: "It searches over a grid of hyperparameters and evaluates options with cross-validation."
      },
      {
        ru: "Автоматически удаляет target variable.",
        en: "It automatically removes the target variable."
      },
      {
        ru: "Строит только scatter plot.",
        en: "It only builds a scatter plot."
      },
      {
        ru: "Заменяет все модели одним imputer.",
        en: "It replaces all models with one imputer."
      }
    ],
    explain: {
      ru: "Для проекта можно было бы подобрать `n_neighbors`, `max_depth` или `C` более системно.",
      en: "For the project, it could tune `n_neighbors`, `max_depth`, or `C` more systematically."
    }
  },
  {
    id: 76,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое regularization?",
      en: "What is regularization?"
    },
    answer: {
      ru: "Ограничение сложности модели, чтобы снизить overfitting.",
      en: "A way to limit model complexity to reduce overfitting."
    },
    choices: [
      {
        ru: "Ограничение сложности модели, чтобы снизить overfitting.",
        en: "A way to limit model complexity to reduce overfitting."
      },
      {
        ru: "Метод создания synthetic minority examples.",
        en: "A method for creating synthetic minority examples."
      },
      {
        ru: "Только подсчет class balance.",
        en: "Only counting class balance."
      },
      {
        ru: "Только сортировка строк.",
        en: "Only sorting rows."
      }
    ],
    explain: {
      ru: "В Logistic Regression regularization управляется параметром `C`: меньше `C` - сильнее regularization.",
      en: "In Logistic Regression, regularization is controlled by `C`: smaller `C` means stronger regularization."
    }
  },
  {
    id: 77,
    topic: "Course",
    visual: "assets/course.svg",
    question: {
      ru: "Что такое L1 и L2 regularization на базовом уровне?",
      en: "What are L1 and L2 regularization at a basic level?"
    },
    answer: {
      ru: "Это penalties на веса модели; L1 может занулять признаки, L2 обычно сглаживает веса.",
      en: "They are penalties on model weights; L1 can zero out features, while L2 usually shrinks weights smoothly."
    },
    choices: [
      {
        ru: "Это penalties на веса модели; L1 может занулять признаки, L2 обычно сглаживает веса.",
        en: "They are penalties on model weights; L1 can zero out features, while L2 usually shrinks weights smoothly."
      },
      {
        ru: "Это два вида target variable.",
        en: "They are two types of target variables."
      },
      {
        ru: "Это названия островов в Palmer Penguins.",
        en: "They are island names in Palmer Penguins."
      },
      {
        ru: "Это две метрики confusion matrix.",
        en: "They are two confusion-matrix metrics."
      }
    ],
    explain: {
      ru: "Если преподаватель спросит глубже, достаточно связать regularization с control of complexity.",
      en: "If the teacher asks deeper, connect regularization with control of complexity."
    }
  },
  {
    id: 78,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что такое ROC-AUC?",
      en: "What is ROC-AUC?"
    },
    answer: {
      ru: "Метрика качества ранжирования по вероятностям, чаще для binary classification.",
      en: "A probability-ranking quality metric, most commonly for binary classification."
    },
    choices: [
      {
        ru: "Метрика качества ранжирования по вероятностям, чаще для binary classification.",
        en: "A probability-ranking quality metric, most commonly for binary classification."
      },
      {
        ru: "Метод заполнения пропусков медианой.",
        en: "A method for median imputation."
      },
      {
        ru: "Алгоритм one-hot encoding.",
        en: "A one-hot encoding algorithm."
      },
      {
        ru: "Тип train-test split без target.",
        en: "A type of train-test split without a target."
      }
    ],
    explain: {
      ru: "Для multi-class ROC-AUC возможен, но на защите проекта достаточно уверенно знать accuracy, F1 и confusion matrix.",
      en: "Multi-class ROC-AUC exists, but for this project defense, accuracy, F1, and confusion matrix are more central."
    }
  },
  {
    id: 79,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что такое probability threshold?",
      en: "What is a probability threshold?"
    },
    answer: {
      ru: "Порог вероятности, после которого модель относит объект к классу.",
      en: "A probability cutoff used to assign an observation to a class."
    },
    choices: [
      {
        ru: "Порог вероятности, после которого модель относит объект к классу.",
        en: "A probability cutoff used to assign an observation to a class."
      },
      {
        ru: "Количество folds в cross-validation.",
        en: "The number of folds in cross-validation."
      },
      {
        ru: "Количество строк после imputation.",
        en: "The number of rows after imputation."
      },
      {
        ru: "Название меньшего класса.",
        en: "The name of the minority class."
      }
    ],
    explain: {
      ru: "В multi-class обычно выбирается класс с максимальной вероятностью; в binary threshold часто равен 0.5.",
      en: "In multi-class classification, the class with the highest probability is usually selected; in binary classification, the threshold is often 0.5."
    }
  },
  {
    id: 80,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Чем macro average отличается от weighted average?",
      en: "How is macro average different from weighted average?"
    },
    answer: {
      ru: "Macro считает классы одинаково, weighted учитывает размер каждого класса.",
      en: "Macro treats classes equally, while weighted accounts for each class size."
    },
    choices: [
      {
        ru: "Macro считает классы одинаково, weighted учитывает размер каждого класса.",
        en: "Macro treats classes equally, while weighted accounts for each class size."
      },
      {
        ru: "Macro используется только для regression, weighted только для EDA.",
        en: "Macro is only for regression, while weighted is only for EDA."
      },
      {
        ru: "Macro удаляет minority class.",
        en: "Macro removes the minority class."
      },
      {
        ru: "Weighted всегда равен нулю.",
        en: "Weighted is always zero."
      }
    ],
    explain: {
      ru: "При imbalance macro сильнее показывает проблемы minority classes.",
      en: "With imbalance, macro more clearly exposes minority-class problems."
    }
  },
  {
    id: 81,
    topic: "Metrics",
    visual: "assets/metrics.svg",
    question: {
      ru: "Что означает support в classification report?",
      en: "What does support mean in a classification report?"
    },
    answer: {
      ru: "Количество настоящих объектов каждого класса в test set.",
      en: "The number of true examples of each class in the test set."
    },
    choices: [
      {
        ru: "Количество настоящих объектов каждого класса в test set.",
        en: "The number of true examples of each class in the test set."
      },
      {
        ru: "Количество признаков после scaling.",
        en: "The number of features after scaling."
      },
      {
        ru: "Количество models в ensemble.",
        en: "The number of models in an ensemble."
      },
      {
        ru: "Размер learning rate.",
        en: "The learning rate size."
      }
    ],
    explain: {
      ru: "В notebook support для test set: Adelie 30, Chinstrap 14, Gentoo 25.",
      en: "In the notebook test set, support is Adelie 30, Chinstrap 14, Gentoo 25."
    }
  },
  {
    id: 82,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Что такое model interpretability?",
      en: "What is model interpretability?"
    },
    answer: {
      ru: "Насколько понятно, почему модель делает такие предсказания.",
      en: "How understandable it is why a model makes its predictions."
    },
    choices: [
      {
        ru: "Насколько понятно, почему модель делает такие предсказания.",
        en: "How understandable it is why a model makes its predictions."
      },
      {
        ru: "Насколько быстро строится pie chart.",
        en: "How fast a pie chart is built."
      },
      {
        ru: "Сколько строк имеет dataset.",
        en: "How many rows the dataset has."
      },
      {
        ru: "Сколько NaN было удалено.",
        en: "How many NaN values were removed."
      }
    ],
    explain: {
      ru: "Decision Tree обычно проще объяснить, Random Forest сильнее, но менее прозрачен.",
      en: "A Decision Tree is usually easier to explain; Random Forest can be stronger but less transparent."
    }
  },
  {
    id: 83,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Что такое feature importance?",
      en: "What is feature importance?"
    },
    answer: {
      ru: "Оценка того, какие признаки сильнее помогают модели делать предсказания.",
      en: "An estimate of which features help the model make predictions the most."
    },
    choices: [
      {
        ru: "Оценка того, какие признаки сильнее помогают модели делать предсказания.",
        en: "An estimate of which features help the model make predictions the most."
      },
      {
        ru: "Список target classes без признаков.",
        en: "A list of target classes without features."
      },
      {
        ru: "Метод удаления train data.",
        en: "A method for removing train data."
      },
      {
        ru: "Тип imputation.",
        en: "A type of imputation."
      }
    ],
    explain: {
      ru: "Для защиты хорошо сказать, что важные признаки должны совпадать с EDA: bill measurements и body size.",
      en: "For the defense, say that important features should match EDA: bill measurements and body size."
    }
  },
  {
    id: 84,
    topic: "Models",
    visual: "assets/models.svg",
    question: {
      ru: "Что такое baseline model?",
      en: "What is a baseline model?"
    },
    answer: {
      ru: "Простая начальная модель, с которой сравнивают более сложные подходы.",
      en: "A simple initial model used as a reference for comparing more complex approaches."
    },
    choices: [
      {
        ru: "Простая начальная модель, с которой сравнивают более сложные подходы.",
        en: "A simple initial model used as a reference for comparing more complex approaches."
      },
      {
        ru: "Модель, которую нельзя оценивать.",
        en: "A model that cannot be evaluated."
      },
      {
        ru: "Только финальный график.",
        en: "Only the final plot."
      },
      {
        ru: "Только автоматический EDA report.",
        en: "Only an automatic EDA report."
      }
    ],
    explain: {
      ru: "Logistic Regression может быть хорошим baseline для табличной classification.",
      en: "Logistic Regression can be a good baseline for tabular classification."
    }
  },
  {
    id: 85,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Что делает ColumnTransformer?",
      en: "What does ColumnTransformer do?"
    },
    answer: {
      ru: "Применяет разные preprocessing steps к разным группам столбцов.",
      en: "It applies different preprocessing steps to different groups of columns."
    },
    choices: [
      {
        ru: "Применяет разные preprocessing steps к разным группам столбцов.",
        en: "It applies different preprocessing steps to different groups of columns."
      },
      {
        ru: "Обучает только Random Forest.",
        en: "It trains only Random Forest."
      },
      {
        ru: "Считает только final accuracy.",
        en: "It calculates only final accuracy."
      },
      {
        ru: "Создает target variable.",
        en: "It creates the target variable."
      }
    ],
    explain: {
      ru: "В проекте числовые признаки проходят imputer+scaler, категориальные - imputer+one-hot.",
      en: "In the project, numerical features go through imputer+scaler, while categorical features go through imputer+one-hot."
    }
  },
  {
    id: 86,
    topic: "Preprocessing",
    visual: "assets/preprocessing.svg",
    question: {
      ru: "Почему preprocessing должен быть внутри cross-validation pipeline?",
      en: "Why should preprocessing be inside the cross-validation pipeline?"
    },
    answer: {
      ru: "Чтобы imputer/scaler учились только на training fold и не подсматривали validation fold.",
      en: "So imputer/scaler are fitted only on the training fold and do not see the validation fold."
    },
    choices: [
      {
        ru: "Чтобы imputer/scaler учились только на training fold и не подсматривали validation fold.",
        en: "So imputer/scaler are fitted only on the training fold and do not see the validation fold."
      },
      {
        ru: "Чтобы validation fold стал target variable.",
        en: "So the validation fold becomes the target variable."
      },
      {
        ru: "Чтобы удалить все models.",
        en: "So all models are removed."
      },
      {
        ru: "Чтобы EDA не выполнялась.",
        en: "So EDA is not performed."
      }
    ],
    explain: {
      ru: "Это один из главных способов избежать data leakage.",
      en: "This is one of the main ways to avoid data leakage."
    }
  },
  {
    id: 87,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Чем Gradient Boosting отличается от Random Forest?",
      en: "How is Gradient Boosting different from Random Forest?"
    },
    answer: {
      ru: "Random Forest строит деревья независимо, а Gradient Boosting строит их последовательно, исправляя ошибки.",
      en: "Random Forest builds trees independently, while Gradient Boosting builds them sequentially to correct errors."
    },
    choices: [
      {
        ru: "Random Forest строит деревья независимо, а Gradient Boosting строит их последовательно, исправляя ошибки.",
        en: "Random Forest builds trees independently, while Gradient Boosting builds them sequentially to correct errors."
      },
      {
        ru: "Random Forest - это scaling, а Gradient Boosting - imputation.",
        en: "Random Forest is scaling, while Gradient Boosting is imputation."
      },
      {
        ru: "Оба метода не используют trees.",
        en: "Neither method uses trees."
      },
      {
        ru: "Gradient Boosting всегда unsupervised.",
        en: "Gradient Boosting is always unsupervised."
      }
    ],
    explain: {
      ru: "Ключ: bagging/independent voting против boosting/sequential correction.",
      en: "Key idea: bagging/independent voting versus boosting/sequential correction."
    }
  },
  {
    id: 88,
    topic: "Ensembles",
    visual: "assets/ensemble.svg",
    question: {
      ru: "Что такое weak learner в boosting?",
      en: "What is a weak learner in boosting?"
    },
    answer: {
      ru: "Простая модель, которая чуть лучше случайного угадывания, но в ансамбле становится сильной.",
      en: "A simple model that is only slightly better than random guessing but becomes strong in an ensemble."
    },
    choices: [
      {
        ru: "Простая модель, которая чуть лучше случайного угадывания, но в ансамбле становится сильной.",
        en: "A simple model that is only slightly better than random guessing but becomes strong in an ensemble."
      },
      {
        ru: "Модель без target labels.",
        en: "A model without target labels."
      },
      {
        ru: "Строка с NaN.",
        en: "A row with NaN."
      },
      {
        ru: "Любой график EDA.",
        en: "Any EDA plot."
      }
    ],
    explain: {
      ru: "Boosting строит strong learner из последовательности weak learners.",
      en: "Boosting builds a strong learner from a sequence of weak learners."
    }
  },
  {
    id: 89,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Какая главная слабость текущего notebook как защиты?",
      en: "What is the main weakness of the current notebook as a defense?"
    },
    answer: {
      ru: "Мало текстового объяснения решений и нет расширения на ensembles/cross-validation.",
      en: "It has little textual explanation of decisions and no extension to ensembles/cross-validation."
    },
    choices: [
      {
        ru: "Мало текстового объяснения решений и нет расширения на ensembles/cross-validation.",
        en: "It has little textual explanation of decisions and no extension to ensembles/cross-validation."
      },
      {
        ru: "В нем нет target variable.",
        en: "It has no target variable."
      },
      {
        ru: "В нем нет EDA вообще.",
        en: "It has no EDA at all."
      },
      {
        ru: "В нем нет ни одной модели.",
        en: "It has no models."
      }
    ],
    explain: {
      ru: "Код рабочий, но защита требует объяснять зачем сделан каждый шаг.",
      en: "The code works, but the defense requires explaining why each step was done."
    }
  },
  {
    id: 90,
    topic: "Project",
    visual: "assets/project.svg",
    question: {
      ru: "Какая минимальная доработка notebook сильнее всего поможет защите?",
      en: "Which minimal notebook improvement would help the defense the most?"
    },
    answer: {
      ru: "Добавить Random Forest, stratified cross-validation и короткие markdown-объяснения.",
      en: "Add Random Forest, stratified cross-validation, and short markdown explanations."
    },
    choices: [
      {
        ru: "Добавить Random Forest, stratified cross-validation и короткие markdown-объяснения.",
        en: "Add Random Forest, stratified cross-validation, and short markdown explanations."
      },
      {
        ru: "Удалить все графики EDA.",
        en: "Remove all EDA plots."
      },
      {
        ru: "Обучить модель на test set.",
        en: "Train the model on the test set."
      },
      {
        ru: "Заменить target на случайные числа.",
        en: "Replace the target with random numbers."
      }
    ],
    explain: {
      ru: "Это закрывает конкретный фидбек: course content, ensembles и надежность результата.",
      en: "This addresses the specific feedback: course content, ensembles, and robustness of the result."
    }
  },
  {
    id: 91,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Что делать, если Андрей не знает точный ответ на защите?",
      en: "What should Andrey do if he does not know the exact answer in the defense?"
    },
    answer: {
      ru: "Сначала назвать общий принцип, затем связать его с проектом и не выдумывать лишнего.",
      en: "First state the general principle, then connect it to the project, and do not invent extra details."
    },
    choices: [
      {
        ru: "Сначала назвать общий принцип, затем связать его с проектом и не выдумывать лишнего.",
        en: "First state the general principle, then connect it to the project, and do not invent extra details."
      },
      {
        ru: "Спорить, что вопрос не относится к проекту.",
        en: "Argue that the question is unrelated to the project."
      },
      {
        ru: "Молчать и ждать следующего вопроса.",
        en: "Stay silent and wait for the next question."
      },
      {
        ru: "Говорить любые термины без связи.",
        en: "Say random terms without connection."
      }
    ],
    explain: {
      ru: "Для устного экзамена лучше короткий честный ответ, чем длинная путаница.",
      en: "For an oral exam, a short honest answer is better than a long confused one."
    }
  },
  {
    id: 92,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Какая структура ответа самая безопасная?",
      en: "What answer structure is the safest?"
    },
    answer: {
      ru: "Definition -> role in ML -> how I used it in my project.",
      en: "Definition -> role in ML -> how I used it in my project."
    },
    choices: [
      {
        ru: "Definition -> role in ML -> how I used it in my project.",
        en: "Definition -> role in ML -> how I used it in my project."
      },
      {
        ru: "Only code -> no explanation -> next slide.",
        en: "Only code -> no explanation -> next slide."
      },
      {
        ru: "Only opinion -> no project connection.",
        en: "Only opinion -> no project connection."
      },
      {
        ru: "Only dataset name -> no ML term.",
        en: "Only dataset name -> no ML term."
      }
    ],
    explain: {
      ru: "Например: EDA definition -> why it matters -> scatter/boxplots in penguins.",
      en: "For example: EDA definition -> why it matters -> scatter/boxplots in penguins."
    }
  },
  {
    id: 93,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Как ответить на вопрос: `Why did you use a Pipeline?`",
      en: "How should Andrey answer: `Why did you use a Pipeline?`"
    },
    answer: {
      ru: "It keeps preprocessing and modeling together, makes the workflow reproducible, and helps avoid data leakage.",
      en: "It keeps preprocessing and modeling together, makes the workflow reproducible, and helps avoid data leakage."
    },
    choices: [
      {
        ru: "It keeps preprocessing and modeling together, makes the workflow reproducible, and helps avoid data leakage.",
        en: "It keeps preprocessing and modeling together, makes the workflow reproducible, and helps avoid data leakage."
      },
      {
        ru: "It replaces all evaluation metrics.",
        en: "It replaces all evaluation metrics."
      },
      {
        ru: "It makes the target unknown.",
        en: "It makes the target unknown."
      },
      {
        ru: "It is only for plotting.",
        en: "It is only for plotting."
      }
    ],
    explain: {
      ru: "Это сильный ответ, потому что связывает код и ML quality.",
      en: "This is a strong answer because it connects code with ML quality."
    }
  },
  {
    id: 94,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Как ответить на вопрос: `What did EDA show about the data?`",
      en: "How should Andrey answer: `What did EDA show about the data?`"
    },
    answer: {
      ru: "It showed missing values, class imbalance, and visible species separation by bill and body-size features.",
      en: "It showed missing values, class imbalance, and visible species separation by bill and body-size features."
    },
    choices: [
      {
        ru: "It showed missing values, class imbalance, and visible species separation by bill and body-size features.",
        en: "It showed missing values, class imbalance, and visible species separation by bill and body-size features."
      },
      {
        ru: "It showed that labels were unknown.",
        en: "It showed that labels were unknown."
      },
      {
        ru: "It showed that no preprocessing was needed.",
        en: "It showed that no preprocessing was needed."
      },
      {
        ru: "It showed that all classes were exactly equal.",
        en: "It showed that all classes were exactly equal."
      }
    ],
    explain: {
      ru: "Это ответ на слабое место, которое прямо указал преподаватель.",
      en: "This answers the weak point explicitly mentioned by the teacher."
    }
  },
  {
    id: 95,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Как ответить на вопрос: `What are ensemble methods? Give one example from your project context.`",
      en: "How should Andrey answer: `What are ensemble methods? Give one example from your project context.`"
    },
    answer: {
      ru: "They combine multiple models. In my context, Random Forest would combine many decision trees to classify penguin species by majority vote.",
      en: "They combine multiple models. In my context, Random Forest would combine many decision trees to classify penguin species by majority vote."
    },
    choices: [
      {
        ru: "They combine multiple models. In my context, Random Forest would combine many decision trees to classify penguin species by majority vote.",
        en: "They combine multiple models. In my context, Random Forest would combine many decision trees to classify penguin species by majority vote."
      },
      {
        ru: "They remove missing values. In my context, they replace SimpleImputer.",
        en: "They remove missing values. In my context, they replace SimpleImputer."
      },
      {
        ru: "They are only charts. In my context, they replace boxplots.",
        en: "They are only charts. In my context, they replace boxplots."
      },
      {
        ru: "They are unsupervised only. In my context, they ignore species labels.",
        en: "They are unsupervised only. In my context, they ignore species labels."
      }
    ],
    explain: {
      ru: "Ответ одновременно дает definition, example и связь с проектом.",
      en: "The answer gives definition, example, and project connection at the same time."
    }
  },
  {
    id: 96,
    topic: "Oral defense",
    visual: "assets/oral.svg",
    question: {
      ru: "Как ответить на вопрос: `Why should I pass you this time?`",
      en: "How should Andrey answer: `Why should I pass you this time?`"
    },
    answer: {
      ru: "I reviewed the weak points, can explain EDA and ensemble methods clearly, and can connect course theory to my project.",
      en: "I reviewed the weak points, can explain EDA and ensemble methods clearly, and can connect course theory to my project."
    },
    choices: [
      {
        ru: "I reviewed the weak points, can explain EDA and ensemble methods clearly, and can connect course theory to my project.",
        en: "I reviewed the weak points, can explain EDA and ensemble methods clearly, and can connect course theory to my project."
      },
      {
        ru: "Because the previous questions were not important.",
        en: "Because the previous questions were not important."
      },
      {
        ru: "Because I only memorized code cells.",
        en: "Because I only memorized code cells."
      },
      {
        ru: "Because the dataset is famous.",
        en: "Because the dataset is famous."
      }
    ],
    explain: {
      ru: "Тон должен быть спокойным: признать прошлую проблему и показать готовность.",
      en: "The tone should be calm: acknowledge the previous issue and show readiness."
    }
  }
];
