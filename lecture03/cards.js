function c(id, topic, visual, qRu, qEn, aRu, aEn, wrongs, eRu, eEn) {
  return {
    id,
    topic,
    visual,
    question: { ru: qRu, en: qEn },
    answer: { ru: aRu, en: aEn },
    choices: [{ ru: aRu, en: aEn }, ...wrongs.map(item => ({ ru: item[0], en: item[1] }))],
    explain: { ru: eRu, en: eEn }
  };
}

const cards = [
  c(1, "Вероятность", "assets/probability.svg",
    "Почему вероятность и статистика важны для машинного обучения?",
    "Why are probability and statistics important for machine learning?",
    "ML ищет закономерности в данных, поэтому нужно описывать неопределенность, распределения и выводы по выборкам.",
    "ML searches for patterns in data, so we need to describe uncertainty, distributions, and conclusions from samples.",
    [
      ["Они нужны только для построения графиков.", "They are needed only for plotting."],
      ["Они заменяют программирование моделей.", "They replace model programming."],
      ["Они нужны только для работы с текстом.", "They are needed only for text processing."]
    ],
    "Модели обучаются на данных, а данные обычно рассматриваются как выборки из случайных процессов.",
    "Models learn from data, and data are often treated as samples from random processes."),
  c(2, "Вероятность", "assets/probability.svg",
    "Что такое пространство выборки Omega?",
    "What is the sample space Omega?",
    "Множество всех возможных исходов эксперимента.",
    "The set of all possible outcomes of an experiment.",
    [
      ["Только один наиболее вероятный исход.", "Only the single most likely outcome."],
      ["Среднее значение выборки.", "The sample mean."],
      ["Функция плотности вероятности.", "A probability density function."]
    ],
    "Для карты это вся колода, для двух бросков монеты это HH, HT, TH, TT.",
    "For a card it is the whole deck; for two coin tosses it is HH, HT, TH, TT."),
  c(3, "Вероятность", "assets/probability.svg",
    "Что такое пространство событий A?",
    "What is the event space A?",
    "Совокупность событий, которым можно назначить вероятность.",
    "A collection of events to which probabilities can be assigned.",
    [
      ["Только список чисел в DataFrame.", "Only a list of numbers in a DataFrame."],
      ["Любая модель машинного обучения.", "Any machine learning model."],
      ["Только одно событие с вероятностью 1.", "Only one event with probability 1."]
    ],
    "В дискретном примере часто берут 2^Omega, то есть все подмножества исходов.",
    "In a discrete example we often use 2^Omega, all subsets of outcomes."),
  c(4, "Вероятность", "assets/probability.svg",
    "Какие базовые свойства должна выполнять вероятность P?",
    "Which basic properties must a probability P satisfy?",
    "P(A) от 0 до 1, P(Omega)=1, вероятности непересекающихся событий складываются.",
    "P(A) is between 0 and 1, P(Omega)=1, and disjoint event probabilities add up.",
    [
      ["Вероятность может быть любой отрицательной величиной.", "Probability can be any negative value."],
      ["P(Omega) всегда равно 0.", "P(Omega) is always 0."],
      ["Пересекающиеся события всегда складываются без поправки.", "Overlapping events are always added without correction."]
    ],
    "Это аксиомы, на которых строятся остальные правила вероятности.",
    "These are the axioms behind the rest of probability rules."),
  c(5, "Вероятность", "assets/probability.svg",
    "Как считают вероятность в простом дискретном случае с равновероятными исходами?",
    "How is probability computed in a simple discrete case with equally likely outcomes?",
    "Число благоприятных исходов делят на число всех исходов.",
    "Divide the number of favorable outcomes by the total number of outcomes.",
    [
      ["Складывают все значения признака.", "Add all feature values."],
      ["Берут квадратный корень из дисперсии.", "Take the square root of variance."],
      ["Всегда получают 0.5.", "Always get 0.5."]
    ],
    "Например, вероятность выбрать конкретную карту из 52 равна 1/52.",
    "For example, the probability of drawing one specific card from 52 cards is 1/52."),
  c(6, "События", "assets/probability.svg",
    "Что означает дополнение события A?",
    "What does the complement of event A mean?",
    "Все исходы из пространства выборки, которые не входят в A.",
    "All outcomes in the sample space that are not in A.",
    [
      ["Только исходы, которые входят в A дважды.", "Only outcomes that occur in A twice."],
      ["Пересечение A с самим собой.", "The intersection of A with itself."],
      ["Среднее значение события A.", "The mean of event A."]
    ],
    "Вероятности события и его дополнения складываются в 1.",
    "An event and its complement have probabilities that sum to 1."),
  c(7, "События", "assets/probability.svg",
    "Что такое пересечение событий A и B?",
    "What is the intersection of events A and B?",
    "Исходы, которые принадлежат одновременно A и B.",
    "Outcomes that belong to both A and B.",
    [
      ["Исходы, которые не входят ни в A, ни в B.", "Outcomes that belong to neither A nor B."],
      ["Исходы, которые входят хотя бы в одно событие.", "Outcomes that belong to at least one event."],
      ["Всегда пустое множество.", "Always an empty set."]
    ],
    "Вероятность пересечения отвечает на вопрос, какова вероятность одновременного наступления событий.",
    "Intersection probability asks how likely both events are to occur together."),
  c(8, "События", "assets/probability.svg",
    "Что такое объединение событий A и B?",
    "What is the union of events A and B?",
    "Исходы, которые принадлежат A, B или обоим событиям.",
    "Outcomes that belong to A, B, or both.",
    [
      ["Только исходы вне A и B.", "Only outcomes outside A and B."],
      ["Только общие исходы A и B.", "Only the common outcomes of A and B."],
      ["Разность средних значений.", "The difference of means."]
    ],
    "Объединение соответствует формулировке: произошло хотя бы одно событие.",
    "Union corresponds to: at least one event occurred."),
  c(9, "События", "assets/probability.svg",
    "Почему в формуле P(A union B) нужно вычитать P(A intersect B)?",
    "Why must P(A intersect B) be subtracted in P(A union B)?",
    "Общая часть A и B при сложении P(A)+P(B) считается дважды.",
    "The overlap of A and B is counted twice in P(A)+P(B).",
    [
      ["Потому что вероятность пересечения всегда отрицательная.", "Because intersection probability is always negative."],
      ["Потому что объединение невозможно.", "Because union is impossible."],
      ["Потому что P(A) всегда больше P(B).", "Because P(A) is always greater than P(B)."]
    ],
    "Правильная формула: P(A union B)=P(A)+P(B)-P(A intersect B).",
    "The correct formula is P(A union B)=P(A)+P(B)-P(A intersect B)."),
  c(10, "События", "assets/probability.svg",
    "Когда события называются взаимоисключающими?",
    "When are events mutually exclusive?",
    "Когда их пересечение пустое: они не могут произойти одновременно.",
    "When their intersection is empty: they cannot occur together.",
    [
      ["Когда одно событие гарантирует другое.", "When one event guarantees the other."],
      ["Когда у них одинаковая вероятность.", "When they have the same probability."],
      ["Когда они имеют нормальное распределение.", "When they are normally distributed."]
    ],
    "Для взаимоисключающих событий P(A union B)=P(A)+P(B).",
    "For mutually exclusive events, P(A union B)=P(A)+P(B)."),
  c(11, "Условная вероятность", "assets/bayes.svg",
    "Что означает P(A | B)?",
    "What does P(A | B) mean?",
    "Вероятность события A при условии, что событие B уже известно.",
    "The probability of event A given that event B is known.",
    [
      ["Вероятность A без учета B.", "The probability of A without considering B."],
      ["Вероятность того, что A и B невозможны.", "The probability that A and B are impossible."],
      ["Дисперсия события B.", "The variance of event B."]
    ],
    "В лекции формула дана как P(A | B)=P(A intersect B)/P(B), если P(B)>0.",
    "The lecture gives P(A | B)=P(A intersect B)/P(B), for P(B)>0."),
  c(12, "Условная вероятность", "assets/bayes.svg",
    "Когда два события независимы?",
    "When are two events independent?",
    "Когда знание одного события не меняет вероятность другого.",
    "When knowing one event does not change the probability of the other.",
    [
      ["Когда они всегда происходят вместе.", "When they always occur together."],
      ["Когда они имеют одинаковое название.", "When they have the same name."],
      ["Когда P(A | B)=0 для всех A и B.", "When P(A | B)=0 for all A and B."]
    ],
    "Эквивалентные признаки: P(A | B)=P(A) и P(A intersect B)=P(A)P(B).",
    "Equivalent conditions include P(A | B)=P(A) and P(A intersect B)=P(A)P(B)."),
  c(13, "Байес", "assets/bayes.svg",
    "Какой смысл у теоремы Байеса?",
    "What is the meaning of Bayes' theorem?",
    "Она обновляет вероятность гипотезы после наблюдения новых данных.",
    "It updates the probability of a hypothesis after observing new data.",
    [
      ["Она сортирует массивы NumPy.", "It sorts NumPy arrays."],
      ["Она строит boxplot.", "It creates a boxplot."],
      ["Она всегда доказывает независимость событий.", "It always proves event independence."]
    ],
    "В ML это базовая идея перехода от prior к posterior через likelihood.",
    "In ML this is the basic idea of moving from prior to posterior through likelihood."),
  c(14, "Байес", "assets/bayes.svg",
    "Что такое prior в формуле Байеса?",
    "What is the prior in Bayes' formula?",
    "Исходная вероятность гипотезы до учета нового наблюдения.",
    "The initial probability of a hypothesis before considering new evidence.",
    [
      ["Вероятность данных при гипотезе.", "The probability of data under the hypothesis."],
      ["Итоговая вероятность после наблюдения.", "The final probability after observation."],
      ["Ошибка округления в коде.", "A rounding error in code."]
    ],
    "В примере с библиотекарем и фермером prior учитывает базовые доли профессий.",
    "In the librarian/farmer example, the prior accounts for base rates of professions."),
  c(15, "Байес", "assets/bayes.svg",
    "Что такое likelihood в формуле Байеса?",
    "What is the likelihood in Bayes' formula?",
    "Вероятность наблюдать данные при условии выбранной гипотезы.",
    "The probability of observing the data given a chosen hypothesis.",
    [
      ["Изначальная доля классов.", "The initial class proportion."],
      ["Количество строк в таблице.", "The number of rows in a table."],
      ["Стандартное отклонение признака.", "The feature standard deviation."]
    ],
    "Likelihood отвечает: насколько хорошо гипотеза объясняет наблюдение.",
    "Likelihood asks how well the hypothesis explains the observation."),
  c(16, "Байес", "assets/bayes.svg",
    "Почему в байесовских задачах нельзя игнорировать базовые вероятности?",
    "Why should base rates not be ignored in Bayesian problems?",
    "Потому что редкая гипотеза может оставаться маловероятной даже при похожем описании.",
    "Because a rare hypothesis may remain unlikely even with a matching description.",
    [
      ["Потому что prior всегда равен likelihood.", "Because prior always equals likelihood."],
      ["Потому что evidence не используется.", "Because evidence is not used."],
      ["Потому что posterior всегда 1.", "Because posterior is always 1."]
    ],
    "Пример Стива показывает типичную ошибку: описание кажется сильным, но базовые частоты важны.",
    "The Steve example shows a common mistake: the description feels strong, but base rates matter."),
  c(17, "Случайные величины", "assets/distributions.svg",
    "Что такое случайная величина?",
    "What is a random variable?",
    "Функция, которая сопоставляет исходу эксперимента измеряемое значение.",
    "A function that maps an experiment outcome to a measurable value.",
    [
      ["Всегда только случайное число из Python.", "Always just a random number from Python."],
      ["Только график распределения.", "Only a distribution plot."],
      ["Любой столбец без вероятностного смысла.", "Any column without probabilistic meaning."]
    ],
    "Например, для двух бросков монеты X может считать число орлов.",
    "For example, in two coin tosses X can count the number of heads."),
  c(18, "Случайные величины", "assets/distributions.svg",
    "Чем дискретная случайная величина отличается от непрерывной?",
    "How does a discrete random variable differ from a continuous one?",
    "Дискретная принимает отдельные значения, непрерывная значения на интервале.",
    "A discrete variable takes separate values; a continuous variable takes values on an interval.",
    [
      ["Дискретная всегда нормальная, непрерывная всегда биномиальная.", "Discrete is always normal; continuous is always binomial."],
      ["Между ними нет различий.", "There is no difference."],
      ["Непрерывная принимает только целые числа.", "A continuous variable takes only integers."]
    ],
    "Для дискретной используют PMF, для непрерывной CDF/PDF и интегралы.",
    "Discrete variables use PMF; continuous variables use CDF/PDF and integrals."),
  c(19, "Случайные величины", "assets/distributions.svg",
    "Почему для непрерывной случайной величины обычно P(X=x)=0?",
    "Why is P(X=x) usually 0 for a continuous random variable?",
    "Вероятность распределяется по интервалам, а отдельная точка имеет нулевую длину.",
    "Probability is assigned over intervals, and a single point has zero length.",
    [
      ["Потому что непрерывные величины невозможны.", "Because continuous variables are impossible."],
      ["Потому что PDF всегда равна 0.", "Because the PDF is always 0."],
      ["Потому что CDF нельзя использовать.", "Because CDF cannot be used."]
    ],
    "Поэтому спрашивают P(X in [a,b]), а не вероятность ровно одного значения.",
    "Therefore we ask P(X in [a,b]), not the probability of exactly one value."),
  c(20, "Распределения", "assets/distributions.svg",
    "Что описывает PMF?",
    "What does a PMF describe?",
    "Вероятность каждого значения дискретной случайной величины.",
    "The probability of each value of a discrete random variable.",
    [
      ["Плотность непрерывного распределения.", "The density of a continuous distribution."],
      ["Только медиану выборки.", "Only the sample median."],
      ["Только p-value.", "Only the p-value."]
    ],
    "Сумма PMF по всем возможным значениям равна 1.",
    "The PMF summed over all possible values equals 1."),
  c(21, "Распределения", "assets/distributions.svg",
    "Что описывает CDF F(x)?",
    "What does the CDF F(x) describe?",
    "Вероятность того, что X меньше или равна x.",
    "The probability that X is less than or equal to x.",
    [
      ["Только вероятность X ровно равна x.", "Only the probability that X equals x exactly."],
      ["Количество признаков в модели.", "The number of model features."],
      ["Случайную перестановку массива.", "A random array permutation."]
    ],
    "CDF полезна для вычисления хвостовых вероятностей через 1-F(x).",
    "The CDF is useful for tail probabilities through 1-F(x)."),
  c(22, "Распределения", "assets/distributions.svg",
    "Что описывает PDF f(x)?",
    "What does the PDF f(x) describe?",
    "Плотность вероятности непрерывной случайной величины.",
    "The probability density of a continuous random variable.",
    [
      ["Вероятность конкретной точки как массу.", "The probability of a specific point as mass."],
      ["Только список категорий.", "Only a list of categories."],
      ["Сумму всех строк DataFrame.", "The sum of all DataFrame rows."]
    ],
    "Вероятность на интервале получается интегралом PDF по этому интервалу.",
    "Probability over an interval is obtained by integrating the PDF over it."),
  c(23, "Моменты", "assets/summary.svg",
    "Что такое математическое ожидание?",
    "What is expected value?",
    "Среднее значение случайной величины с учетом вероятностей ее значений.",
    "The average value of a random variable weighted by probabilities.",
    [
      ["Всегда максимальное наблюдение.", "Always the maximum observation."],
      ["Только первый элемент массива.", "Only the first array element."],
      ["Вероятность ошибки модели.", "The probability of a model error."]
    ],
    "Для дискретной X это сумма p_i x_i, для непрерывной - интеграл x f(x).",
    "For discrete X it is sum p_i x_i; for continuous X it is integral x f(x)."),
  c(24, "Моменты", "assets/summary.svg",
    "Что измеряет дисперсия?",
    "What does variance measure?",
    "Разброс случайной величины вокруг ее среднего значения.",
    "The spread of a random variable around its mean.",
    [
      ["Центр распределения без учета разброса.", "The center of a distribution without spread."],
      ["Количество категорий.", "The number of categories."],
      ["Всегда вероятность события.", "Always an event probability."]
    ],
    "В лекции дана форма Var(X)=E((X-mu)^2)=E(X^2)-mu^2.",
    "The lecture gives Var(X)=E((X-mu)^2)=E(X^2)-mu^2."),
  c(25, "Моменты", "assets/summary.svg",
    "Как связано стандартное отклонение с дисперсией?",
    "How is standard deviation related to variance?",
    "Стандартное отклонение равно квадратному корню из дисперсии.",
    "Standard deviation is the square root of variance.",
    [
      ["Это квадрат дисперсии.", "It is the square of variance."],
      ["Это всегда 0.", "It is always 0."],
      ["Это CDF распределения.", "It is the distribution CDF."]
    ],
    "Стандартное отклонение удобно тем, что имеет те же единицы измерения, что и данные.",
    "Standard deviation is convenient because it has the same units as the data."),
  c(26, "Биномиальное", "assets/distributions.svg",
    "Когда применяют биномиальное распределение?",
    "When is the binomial distribution used?",
    "Для n независимых испытаний с двумя исходами и вероятностью успеха p.",
    "For n independent trials with two outcomes and success probability p.",
    [
      ["Для непрерывного времени ожидания между событиями.", "For continuous waiting time between events."],
      ["Для сравнения трех и более средних.", "For comparing three or more means."],
      ["Для описания любой таблицы без вероятностей.", "For describing any table without probabilities."]
    ],
    "Пример: число успехов в n бросках или число пациентов с побочными эффектами.",
    "Example: number of successes in n tosses or number of patients with side effects."),
  c(27, "Биномиальное", "assets/distributions.svg",
    "Что означает параметр n в B(n,p)?",
    "What does parameter n mean in B(n,p)?",
    "Количество независимых испытаний.",
    "The number of independent trials.",
    [
      ["Вероятность успеха.", "The probability of success."],
      ["Среднее время ожидания.", "The mean waiting time."],
      ["Число степеней свободы t-теста.", "The degrees of freedom of a t-test."]
    ],
    "В формуле P(X=k) n задает, сколько раз повторяется эксперимент.",
    "In P(X=k), n defines how many times the experiment is repeated."),
  c(28, "Биномиальное", "assets/distributions.svg",
    "Что означает параметр p в B(n,p)?",
    "What does parameter p mean in B(n,p)?",
    "Вероятность успеха в одном испытании.",
    "The probability of success in one trial.",
    [
      ["Количество испытаний.", "The number of trials."],
      ["p-value гипотезы.", "The hypothesis p-value."],
      ["Размер выборки второго класса.", "The sample size of the second class."]
    ],
    "В лекции p используется, например, как вероятность побочных эффектов.",
    "In the lecture, p is used for example as the probability of side effects."),
  c(29, "Биномиальное", "assets/distributions.svg",
    "Какая функция SciPy использовалась для PMF биномиального распределения?",
    "Which SciPy function was used for the binomial PMF?",
    "st.binom.pmf(k, n, p)",
    "st.binom.pmf(k, n, p)",
    [
      ["st.norm.cdf(k, n, p)", "st.norm.cdf(k, n, p)"],
      ["sns.boxplot(k, n, p)", "sns.boxplot(k, n, p)"],
      ["np.cov(k, n, p)", "np.cov(k, n, p)"]
    ],
    "PMF дает вероятность конкретного числа успехов k.",
    "The PMF gives the probability of a specific number of successes k."),
  c(30, "Биномиальное", "assets/distributions.svg",
    "Почему в упражнении с лечением полезнее спросить P(X > 4), а не только P(X = 4)?",
    "Why is P(X > 4) more useful than only P(X = 4) in the treatment exercise?",
    "Потому что дополнительные расходы возникают при любом числе пациентов больше 4.",
    "Because extra costs occur for any number of patients greater than 4.",
    [
      ["Потому что P(X=4) всегда равно 1.", "Because P(X=4) is always 1."],
      ["Потому что X не является случайной величиной.", "Because X is not a random variable."],
      ["Потому что биномиальное распределение не имеет хвоста.", "Because the binomial distribution has no tail."]
    ],
    "В финансовой оценке важна вероятность всего опасного диапазона, а не одной точки.",
    "In financial assessment, the probability of the whole risky range matters, not one point."),
  c(31, "Равномерное", "assets/distributions.svg",
    "Что моделирует равномерное распределение?",
    "What does the uniform distribution model?",
    "Случайную величину, значения которой равновероятны в заданном диапазоне.",
    "A random variable whose values are equally likely over a given range.",
    [
      ["Только число успехов в n испытаниях.", "Only the number of successes in n trials."],
      ["Только связь двух переменных.", "Only the relationship between two variables."],
      ["Только категориальные частоты.", "Only categorical frequencies."]
    ],
    "В лекции примером служат равновероятные оценки выпускников.",
    "In the lecture, equally likely graduate grades are an example."),
  c(32, "Равномерное", "assets/distributions.svg",
    "Чему равно среднее равномерного распределения на [a,b]?",
    "What is the mean of a uniform distribution on [a,b]?",
    "(a+b)/2",
    "(a+b)/2",
    [
      ["a*b", "a*b"],
      ["b-a", "b-a"],
      ["1/(b-a)^2", "1/(b-a)^2"]
    ],
    "Для оценок от 18 до 30 среднее равно 24.",
    "For grades from 18 to 30, the mean is 24."),
  c(33, "Экспоненциальное", "assets/distributions.svg",
    "Что моделирует экспоненциальное распределение?",
    "What does the exponential distribution model?",
    "Время или расстояние между независимыми событиями с заданной скоростью.",
    "Time or distance between independent events with a fixed rate.",
    [
      ["Число успехов в фиксированном числе испытаний.", "The number of successes in a fixed number of trials."],
      ["Квартильный размах.", "The interquartile range."],
      ["Корреляцию Пирсона.", "Pearson correlation."]
    ],
    "В примере почты оно описывает время ожидания прихода следующего человека.",
    "In the post office example, it describes waiting time until the next person arrives."),
  c(34, "Экспоненциальное", "assets/distributions.svg",
    "Если скорость событий lambda, чему равно среднее экспоненциального распределения?",
    "If the event rate is lambda, what is the mean of an exponential distribution?",
    "1/lambda",
    "1/lambda",
    [
      ["lambda", "lambda"],
      ["lambda squared", "lambda squared"],
      ["n*p", "n*p"]
    ],
    "При 10 людях за 60 минут lambda=10/60, среднее ожидание 6 минут.",
    "At 10 people per 60 minutes, lambda=10/60 and the mean wait is 6 minutes."),
  c(35, "Экспоненциальное", "assets/distributions.svg",
    "Как в лекции считали вероятность ждать больше 10 минут?",
    "How did the lecture compute the probability of waiting more than 10 minutes?",
    "Как 1 - CDF(10) для экспоненциального распределения.",
    "As 1 - CDF(10) for the exponential distribution.",
    [
      ["Как PMF ровно в 10.", "As the PMF exactly at 10."],
      ["Как медиану выборки.", "As the sample median."],
      ["Как ковариацию двух признаков.", "As covariance of two features."]
    ],
    "В коде использовалось 1 - st.expon.cdf(10, scale=1/rate).",
    "The code used 1 - st.expon.cdf(10, scale=1/rate)."),
  c(36, "Нормальное", "assets/distributions.svg",
    "Почему нормальное распределение часто встречается в статистике и ML?",
    "Why is the normal distribution common in statistics and ML?",
    "Оно часто возникает как приближение случайных процессов и выборочных средних.",
    "It often appears as an approximation for random processes and sample means.",
    [
      ["Потому что все данные всегда нормальны.", "Because all data are always normal."],
      ["Потому что оно применимо только к категориям.", "Because it applies only to categories."],
      ["Потому что оно не имеет параметров.", "Because it has no parameters."]
    ],
    "CLT объясняет, почему средние многих выборок стремятся к нормальной форме.",
    "The CLT explains why many sample means tend toward a normal shape."),
  c(37, "Нормальное", "assets/distributions.svg",
    "Что означает стандартное нормальное распределение?",
    "What is the standard normal distribution?",
    "Нормальное распределение с mu=0 и sigma=1.",
    "A normal distribution with mu=0 and sigma=1.",
    [
      ["Биномиальное распределение с p=0.5.", "A binomial distribution with p=0.5."],
      ["Любое распределение с медианой 0.", "Any distribution with median 0."],
      ["Экспоненциальное распределение с lambda=1.", "An exponential distribution with lambda=1."]
    ],
    "Оно используется для z-оценок и стандартных таблиц.",
    "It is used for z-scores and standard normal tables."),
  c(38, "Нормальное", "assets/testing.svg",
    "Какой интервал нормального распределения покрывает примерно 95% вокруг среднего?",
    "Which normal-distribution interval covers about 95% around the mean?",
    "mu ± 1.96 sigma",
    "mu ± 1.96 sigma",
    [
      ["mu ± 0.5 sigma", "mu ± 0.5 sigma"],
      ["mu ± 10 sigma", "mu ± 10 sigma"],
      ["Только точка mu.", "Only the point mu."]
    ],
    "Этот порог появляется в лекции при z-test и p-value.",
    "This threshold appears in the lecture in z-tests and p-values."),
  c(39, "Хи-квадрат", "assets/distributions.svg",
    "Как можно получить распределение хи-квадрат с k степенями свободы?",
    "How can a chi-square distribution with k degrees of freedom be obtained?",
    "Как сумму квадратов k независимых стандартных нормальных величин.",
    "As the sum of squares of k independent standard normal variables.",
    [
      ["Как сумму k категориальных строк.", "As the sum of k categorical rows."],
      ["Как медиану k наблюдений.", "As the median of k observations."],
      ["Как произведение двух CDF.", "As the product of two CDFs."]
    ],
    "Эта связь нужна дальше для выборочной дисперсии и chi-square теста.",
    "This connection is used later for sample variance and the chi-square test."),
  c(40, "Выборки", "assets/sampling.svg",
    "Что такое выборочное среднее?",
    "What is the sample mean?",
    "Сумма наблюдений, деленная на их количество.",
    "The sum of observations divided by their count.",
    [
      ["Максимальное наблюдение.", "The maximum observation."],
      ["Вероятность одной категории.", "The probability of one category."],
      ["Сумма квадратов ошибок.", "The sum of squared errors."]
    ],
    "В лекции обозначается X-bar_n и служит оценкой ожидаемого значения.",
    "The lecture denotes it as X-bar_n and uses it to estimate expected value."),
  c(41, "Выборки", "assets/sampling.svg",
    "Что утверждает закон больших чисел?",
    "What does the law of large numbers state?",
    "При большом числе испытаний выборочное среднее стремится к математическому ожиданию.",
    "With many trials, the sample mean tends toward the expected value.",
    [
      ["Любая выборка становится идеально нормальной.", "Any sample becomes perfectly normal."],
      ["Дисперсия всегда растет без ограничения.", "Variance always grows without bound."],
      ["p-value всегда становится 0.", "The p-value always becomes 0."]
    ],
    "В примере доля орлов приближается к заданной вероятности при росте числа бросков.",
    "In the example, the proportion of heads approaches the chosen probability as tosses increase."),
  c(42, "Выборки", "assets/sampling.svg",
    "Что утверждает центральная предельная теорема?",
    "What does the central limit theorem state?",
    "При достаточно большом n распределение выборочного среднего приближается к нормальному.",
    "For sufficiently large n, the distribution of the sample mean approaches a normal distribution.",
    [
      ["Исходное распределение обязательно становится равномерным.", "The original distribution must become uniform."],
      ["Все наблюдения становятся одинаковыми.", "All observations become identical."],
      ["Любая корреляция становится равной 1.", "Any correlation becomes 1."]
    ],
    "Важно: это касается распределения средних, а не обязательно исходных данных.",
    "Important: it concerns the distribution of means, not necessarily the raw data."),
  c(43, "Выборки", "assets/sampling.svg",
    "Как меняется дисперсия выборочного среднего при росте n по CLT?",
    "How does the variance of the sample mean change as n grows under the CLT?",
    "Она равна sigma squared / n, поэтому уменьшается с ростом n.",
    "It is sigma squared / n, so it decreases as n grows.",
    [
      ["Она всегда равна sigma squared * n.", "It is always sigma squared times n."],
      ["Она не зависит от n.", "It does not depend on n."],
      ["Она всегда становится отрицательной.", "It always becomes negative."]
    ],
    "Большие выборки дают более стабильные средние.",
    "Larger samples produce more stable means."),
  c(44, "Выборки", "assets/sampling.svg",
    "Почему выборочная дисперсия с делением на n может быть смещенной?",
    "Why can sample variance divided by n be biased?",
    "Потому что истинное среднее неизвестно и заменяется выборочным средним.",
    "Because the true mean is unknown and is replaced by the sample mean.",
    [
      ["Потому что дисперсия не существует.", "Because variance does not exist."],
      ["Потому что все данные категориальные.", "Because all data are categorical."],
      ["Потому что n всегда равно 1.", "Because n always equals 1."]
    ],
    "Замена mu на X-bar снижает оценку разброса, поэтому нужна поправка.",
    "Replacing mu with X-bar lowers the spread estimate, so a correction is needed."),
  c(45, "Выборки", "assets/sampling.svg",
    "Что делает поправка Бесселя?",
    "What does Bessel's correction do?",
    "Использует деление на n-1 вместо n для несмещенной оценки дисперсии.",
    "Uses division by n-1 instead of n for an unbiased variance estimate.",
    [
      ["Удаляет выбросы из boxplot.", "Removes outliers from a boxplot."],
      ["Превращает CDF в PMF.", "Turns a CDF into a PMF."],
      ["Считает корреляцию Пирсона.", "Computes Pearson correlation."]
    ],
    "В NumPy это соответствует `ddof=1` при вычислении выборочной дисперсии.",
    "In NumPy this corresponds to `ddof=1` for sample variance."),
  c(46, "Асимметрия", "assets/summary.svg",
    "Что измеряет skewness?",
    "What does skewness measure?",
    "Асимметрию распределения относительно среднего.",
    "The asymmetry of a distribution around its mean.",
    [
      ["Только центральную тенденцию.", "Only central tendency."],
      ["Количество наблюдений.", "The number of observations."],
      ["Вероятность нулевой гипотезы.", "The probability of the null hypothesis."]
    ],
    "Положительная или отрицательная асимметрия показывает направление длинного хвоста.",
    "Positive or negative skewness indicates the direction of the long tail."),
  c(47, "Центр", "assets/summary.svg",
    "Когда среднее может плохо описывать центр данных?",
    "When can the mean poorly describe the center of data?",
    "Когда распределение сильно асимметрично или есть выбросы.",
    "When the distribution is strongly skewed or has outliers.",
    [
      ["Когда все значения одинаковые.", "When all values are identical."],
      ["Когда данных нет.", "When there are no data."],
      ["Когда медиана равна среднему.", "When the median equals the mean."]
    ],
    "В таких случаях медиана часто устойчивее.",
    "In such cases the median is often more robust."),
  c(48, "Центр", "assets/summary.svg",
    "Что такое медиана?",
    "What is the median?",
    "Значение, которое делит упорядоченную выборку на две половины.",
    "The value that splits an ordered sample into two halves.",
    [
      ["Самое частое значение.", "The most frequent value."],
      ["Сумма всех значений.", "The sum of all values."],
      ["Квадрат стандартного отклонения.", "The square of standard deviation."]
    ],
    "Медиана меньше чувствительна к экстремальным значениям, чем среднее.",
    "The median is less sensitive to extreme values than the mean."),
  c(49, "Центр", "assets/summary.svg",
    "Что такое мода?",
    "What is the mode?",
    "Наиболее часто встречающееся значение.",
    "The most frequently occurring value.",
    [
      ["Среднее всех значений.", "The average of all values."],
      ["Разница Q3 и Q1.", "The difference between Q3 and Q1."],
      ["Площадь под PDF.", "The area under the PDF."]
    ],
    "В коде лекции использовалась функция `st.mode(counts)`.",
    "The lecture code used `st.mode(counts)`."),
  c(50, "Процентили", "assets/summary.svg",
    "Что показывает p-й процентиль?",
    "What does the p-th percentile show?",
    "Значение, ниже которого находится p процентов данных.",
    "The value below which p percent of the data lie.",
    [
      ["Вероятность нулевой гипотезы.", "The probability of the null hypothesis."],
      ["Количество всех строк.", "The total number of rows."],
      ["Степени свободы.", "Degrees of freedom."]
    ],
    "В лекции для процентилей использовалась `np.percentile`.",
    "The lecture used `np.percentile` for percentiles."),
  c(51, "Квартили", "assets/boxplot.svg",
    "Что такое квартиль Q1?",
    "What is quartile Q1?",
    "25-й процентиль данных.",
    "The 25th percentile of the data.",
    [
      ["75-й процентиль.", "The 75th percentile."],
      ["Среднее значение.", "The mean."],
      ["Максимальное значение.", "The maximum value."]
    ],
    "Q1 является нижним краем коробки в boxplot.",
    "Q1 is the lower edge of the box in a boxplot."),
  c(52, "Квартили", "assets/boxplot.svg",
    "Что такое IQR?",
    "What is IQR?",
    "Межквартильный размах Q3 - Q1.",
    "The interquartile range Q3 - Q1.",
    [
      ["Q1 + Q3.", "Q1 + Q3."],
      ["Среднее минус медиана.", "Mean minus median."],
      ["p-value теста.", "The p-value of a test."]
    ],
    "IQR измеряет разброс центральных 50% данных.",
    "IQR measures the spread of the central 50% of the data."),
  c(53, "Boxplot", "assets/boxplot.svg",
    "Что показывает boxplot?",
    "What does a boxplot show?",
    "Медиану, квартили, IQR, усы и возможные выбросы.",
    "Median, quartiles, IQR, whiskers, and possible outliers.",
    [
      ["Только среднее значение.", "Only the mean."],
      ["Только CDF нормального распределения.", "Only the CDF of a normal distribution."],
      ["Только корреляцию двух переменных.", "Only correlation between two variables."]
    ],
    "Это компактный способ сравнивать распределения между группами.",
    "It is a compact way to compare distributions across groups."),
  c(54, "Boxplot", "assets/boxplot.svg",
    "Как в лекции определялись границы усов boxplot?",
    "How were boxplot whisker limits defined in the lecture?",
    "Через Q1 - 1.5*IQR и Q3 + 1.5*IQR.",
    "Through Q1 - 1.5*IQR and Q3 + 1.5*IQR.",
    [
      ["Через среднее ± 1.96 sigma.", "Through mean ± 1.96 sigma."],
      ["Через максимум и минимум без ограничений.", "Through maximum and minimum without limits."],
      ["Через p-value.", "Through the p-value."]
    ],
    "Точки за этими границами часто рассматривают как кандидаты в выбросы.",
    "Points beyond these limits are often treated as outlier candidates."),
  c(55, "Гистограммы", "assets/summary.svg",
    "Для чего в лекции использовалась гистограмма tips?",
    "What was the tips histogram used for in the lecture?",
    "Для сравнения распределений total_bill у курящих и некурящих групп.",
    "To compare total_bill distributions for smoker and non-smoker groups.",
    [
      ["Для вычисления Байеса.", "To compute Bayes' theorem."],
      ["Для построения таблицы сопряженности.", "To build a contingency table."],
      ["Для запуска ANOVA напрямую.", "To run ANOVA directly."]
    ],
    "Гистограмма показывает форму распределения и различия между группами.",
    "A histogram shows distribution shape and differences between groups."),
  c(56, "QQ plot", "assets/summary.svg",
    "Для чего нужен QQ-plot?",
    "What is a QQ plot used for?",
    "Для сравнения квантилей двух распределений.",
    "To compare quantiles of two distributions.",
    [
      ["Для подсчета числа категорий.", "To count the number of categories."],
      ["Для обучения модели классификации.", "To train a classification model."],
      ["Для замены CDF.", "To replace the CDF."]
    ],
    "Если точки близки к диагонали, распределения похожи по квантилям.",
    "If points lie near the diagonal, the distributions are similar by quantiles."),
  c(57, "Совместные распределения", "assets/joint.svg",
    "Что описывает совместное распределение X и Y?",
    "What does the joint distribution of X and Y describe?",
    "Вероятности пар значений двух случайных величин.",
    "Probabilities of pairs of values of two random variables.",
    [
      ["Только распределение X без Y.", "Only the distribution of X without Y."],
      ["Только среднее значение X.", "Only the mean of X."],
      ["Только p-value теста.", "Only the test p-value."]
    ],
    "Совместное распределение нужно, когда важна связь между переменными.",
    "Joint distribution is needed when the relationship between variables matters."),
  c(58, "Совместные распределения", "assets/joint.svg",
    "Что такое маргинализация в дискретном совместном распределении?",
    "What is marginalization in a discrete joint distribution?",
    "Получение распределения одной переменной суммированием по другой.",
    "Obtaining one variable's distribution by summing over the other.",
    [
      ["Удаление всех строк с NaN.", "Removing all rows with NaN."],
      ["Нормализация z-score.", "Z-score normalization."],
      ["Переход от среднего к медиане.", "Switching from mean to median."]
    ],
    "Например, P(X=x_i)=sum_j P(X=x_i,Y=y_j).",
    "For example, P(X=x_i)=sum_j P(X=x_i,Y=y_j)."),
  c(59, "Совместные распределения", "assets/joint.svg",
    "Как записывается условная вероятность в совместной таблице частот?",
    "How is conditional probability written in a joint frequency table?",
    "Как отношение соответствующей ячейки к сумме по условной группе.",
    "As the cell count divided by the total count of the conditioning group.",
    [
      ["Как сумма всех ячеек без деления.", "As the sum of all cells without division."],
      ["Как квадрат ячейки.", "As the square of the cell."],
      ["Как стандартное отклонение таблицы.", "As the table standard deviation."]
    ],
    "В лекции для P(Y=y_j | X=x_i) используется n_ij / c_i.",
    "The lecture uses n_ij / c_i for P(Y=y_j | X=x_i)."),
  c(60, "Совместные распределения", "assets/joint.svg",
    "Когда две случайные величины X и Y независимы?",
    "When are random variables X and Y independent?",
    "Когда их совместное распределение раскладывается в произведение маргинальных.",
    "When their joint distribution factors into the product of marginals.",
    [
      ["Когда их ковариация всегда положительна.", "When their covariance is always positive."],
      ["Когда они имеют одинаковые единицы измерения.", "When they have the same units."],
      ["Когда у них одинаковое среднее.", "When they have the same mean."]
    ],
    "Для плотностей это f(x,y)=f_X(x)f_Y(y).",
    "For densities this is f(x,y)=f_X(x)f_Y(y)."),
  c(61, "Ковариация", "assets/correlation.svg",
    "Что измеряет ковариация?",
    "What does covariance measure?",
    "Совместное направление изменения двух переменных относительно их средних.",
    "The joint direction of variation of two variables around their means.",
    [
      ["Только масштаб одной переменной.", "Only the scale of one variable."],
      ["Только число категорий.", "Only the number of categories."],
      ["Только хвост нормального распределения.", "Only the tail of a normal distribution."]
    ],
    "Положительная ковариация означает тенденцию расти вместе, отрицательная - двигаться в разные стороны.",
    "Positive covariance means variables tend to grow together; negative means they move oppositely."),
  c(62, "Ковариация", "assets/correlation.svg",
    "Что находится на диагонали ковариационной матрицы?",
    "What is on the diagonal of a covariance matrix?",
    "Дисперсии соответствующих переменных.",
    "The variances of the corresponding variables.",
    [
      ["p-values всех тестов.", "p-values of all tests."],
      ["Медианы переменных.", "The medians of variables."],
      ["Размеры выборок.", "Sample sizes."]
    ],
    "В лекции это показывалось через `np.cov(x, y)` и `np.var(x), np.var(y)`.",
    "The lecture showed this using `np.cov(x, y)` and `np.var(x), np.var(y)`."),
  c(63, "Ковариация", "assets/correlation.svg",
    "Почему независимость дает нулевую ковариацию, но не наоборот?",
    "Why does independence imply zero covariance, but not conversely?",
    "Ковариация ловит линейную связь, а нелинейная зависимость может дать ковариацию около нуля.",
    "Covariance captures linear association, while nonlinear dependence can have near-zero covariance.",
    [
      ["Потому что ковариация всегда равна 1.", "Because covariance is always 1."],
      ["Потому что независимость невозможна.", "Because independence is impossible."],
      ["Потому что ковариация применима только к категориям.", "Because covariance applies only to categories."]
    ],
    "Лекция отдельно показывает нелинейный пример с синусом и низкой корреляцией.",
    "The lecture separately shows a nonlinear sine example with low correlation."),
  c(64, "Корреляция", "assets/correlation.svg",
    "Зачем нужна корреляция Пирсона после ковариации?",
    "Why use Pearson correlation after covariance?",
    "Она нормирует ковариацию на стандартные отклонения и убирает влияние масштаба.",
    "It normalizes covariance by standard deviations and removes scale effects.",
    [
      ["Она всегда делает переменные независимыми.", "It always makes variables independent."],
      ["Она заменяет среднее значение.", "It replaces the mean."],
      ["Она считает PMF.", "It computes a PMF."]
    ],
    "Формула: rho = cov(x,y)/(sigma_x sigma_y).",
    "Formula: rho = cov(x,y)/(sigma_x sigma_y)."),
  c(65, "Корреляция", "assets/correlation.svg",
    "В каком диапазоне находится коэффициент корреляции Пирсона?",
    "What is the range of Pearson's correlation coefficient?",
    "От -1 до 1.",
    "From -1 to 1.",
    [
      ["От 0 до бесконечности.", "From 0 to infinity."],
      ["Только от 0 до 1.", "Only from 0 to 1."],
      ["От -100 до 100 процентов без нормировки.", "From -100 to 100 percent without normalization."]
    ],
    "Значения около 0 указывают на слабую линейную связь.",
    "Values near 0 indicate weak linear association."),
  c(66, "Корреляция", "assets/correlation.svg",
    "Какая SciPy-функция использовалась для корреляции Пирсона?",
    "Which SciPy function was used for Pearson correlation?",
    "st.pearsonr(x, y)",
    "st.pearsonr(x, y)",
    [
      ["st.binom.pmf(x, y)", "st.binom.pmf(x, y)"],
      ["np.percentile(x, y)", "np.percentile(x, y)"],
      ["sns.boxplot(x, y)", "sns.boxplot(x, y)"]
    ],
    "Второе значение `pearsonr` связано со статистической значимостью.",
    "The second value from `pearsonr` is related to statistical significance."),
  c(67, "Гипотезы", "assets/testing.svg",
    "Что такое нулевая гипотеза H0?",
    "What is the null hypothesis H0?",
    "Базовое утверждение, которое проверяется на согласованность с наблюдениями.",
    "A baseline claim tested for consistency with observations.",
    [
      ["Всегда утверждение, что модель идеальна.", "Always the claim that the model is perfect."],
      ["Любой график в ноутбуке.", "Any plot in a notebook."],
      ["Среднее значение выборки.", "The sample mean."]
    ],
    "Например: монета честная или среднее популяции равно mu0.",
    "Examples: the coin is fair or the population mean equals mu0."),
  c(68, "Гипотезы", "assets/testing.svg",
    "Что такое альтернативная гипотеза H1?",
    "What is the alternative hypothesis H1?",
    "Утверждение, противоположное или отличное от H0, которое рассматривается при отклонении H0.",
    "A claim contrary to or different from H0 considered when H0 is rejected.",
    [
      ["Всегда то же самое, что H0.", "Always the same as H0."],
      ["Только размер выборки.", "Only the sample size."],
      ["Функция визуализации.", "A plotting function."]
    ],
    "В двустороннем тесте H1 часто означает, что параметр не равен заданному значению.",
    "In a two-sided test H1 often means the parameter is not equal to the chosen value."),
  c(69, "Гипотезы", "assets/testing.svg",
    "Что такое уровень значимости alpha?",
    "What is the significance level alpha?",
    "Порог вероятности, при котором мы готовы отвергнуть H0.",
    "A probability threshold at which we are willing to reject H0.",
    [
      ["Среднее значение выборки.", "The sample mean."],
      ["Вероятность успеха в биномиальном распределении.", "The success probability in a binomial distribution."],
      ["Количество признаков в DataFrame.", "The number of DataFrame features."]
    ],
    "Типичные значения из лекции: 0.05 и 0.01.",
    "Typical lecture values are 0.05 and 0.01."),
  c(70, "Гипотезы", "assets/testing.svg",
    "Что такое p-value?",
    "What is a p-value?",
    "Вероятность получить результат не менее экстремальный, если H0 верна.",
    "The probability of obtaining a result at least as extreme if H0 is true.",
    [
      ["Вероятность того, что H0 истинна.", "The probability that H0 is true."],
      ["Доля пропусков в данных.", "The fraction of missing values."],
      ["Параметр p в любой модели.", "The parameter p in any model."]
    ],
    "Малое p-value означает, что наблюдение плохо согласуется с H0.",
    "A small p-value means the observation is poorly compatible with H0."),
  c(71, "Гипотезы", "assets/testing.svg",
    "Какое решение обычно принимают, если p-value < alpha?",
    "What decision is usually made if p-value < alpha?",
    "Отвергают нулевую гипотезу.",
    "Reject the null hypothesis.",
    [
      ["Обязательно принимают H0 как доказанную.", "Always accept H0 as proven."],
      ["Удаляют все данные.", "Delete all data."],
      ["Меняют шкалу графика на логарифмическую.", "Change the plot scale to logarithmic."]
    ],
    "Корректная формулировка: отвергнуть или не отвергнуть H0, а не доказать H0.",
    "The correct wording is reject or fail to reject H0, not prove H0."),
  c(72, "Z-score", "assets/testing.svg",
    "Что показывает z-score?",
    "What does a z-score show?",
    "На сколько стандартных отклонений значение находится от среднего.",
    "How many standard deviations a value is from the mean.",
    [
      ["Сколько строк в выборке.", "How many rows are in the sample."],
      ["Количество степеней свободы.", "The number of degrees of freedom."],
      ["Вероятность категории в таблице.", "The probability of a table category."]
    ],
    "Формула в лекции: z_i=(x_i-mu)/sigma.",
    "The lecture formula is z_i=(x_i-mu)/sigma."),
  c(73, "Z-test", "assets/testing.svg",
    "Когда в лекции применялся z-test?",
    "When was the z-test applied in the lecture?",
    "Когда проверяли среднее при известном стандартном отклонении sigma.",
    "When testing a mean with known standard deviation sigma.",
    [
      ["Когда сравнивали категориальные таблицы.", "When comparing categorical tables."],
      ["Когда строили boxplot.", "When creating a boxplot."],
      ["Когда считали моду.", "When computing the mode."]
    ],
    "Статистика: z=(xbar-mu*)/(sigma/sqrt(N)).",
    "Statistic: z=(xbar-mu*)/(sigma/sqrt(N))."),
  c(74, "Z-test", "assets/testing.svg",
    "Почему в двустороннем z-test при alpha=0.05 появляется порог 1.96?",
    "Why does threshold 1.96 appear in a two-sided z-test with alpha=0.05?",
    "Потому что по 2.5% вероятности остается в каждом хвосте стандартной нормали.",
    "Because 2.5% probability remains in each tail of the standard normal.",
    [
      ["Потому что 1.96 - это среднее любой выборки.", "Because 1.96 is the mean of any sample."],
      ["Потому что дисперсия всегда 1.96.", "Because variance is always 1.96."],
      ["Потому что p-value всегда равно 1.96.", "Because p-value is always 1.96."]
    ],
    "В коде порог находили через `st.norm.ppf(1-alpha/2)`.",
    "The code found the threshold using `st.norm.ppf(1-alpha/2)`."),
  c(75, "Монета", "assets/testing.svg",
    "Какая H0 в примере с честной монетой?",
    "What is H0 in the fair coin example?",
    "Монета честная, то есть число орлов следует B(6, 0.5).",
    "The coin is fair, so the number of heads follows B(6, 0.5).",
    [
      ["Монета всегда дает орла.", "The coin always gives heads."],
      ["Монета имеет нормальное распределение высоты.", "The coin has a normal height distribution."],
      ["Орлы и решки являются непрерывными величинами.", "Heads and tails are continuous variables."]
    ],
    "Если все 6 бросков дают один результат, это достаточно экстремально для alpha=0.05.",
    "If all 6 tosses give one outcome, that is extreme enough for alpha=0.05."),
  c(76, "t-test", "assets/tests.svg",
    "Когда нужен t-test вместо z-test?",
    "When is a t-test needed instead of a z-test?",
    "Когда sigma популяции неизвестна и оценивается по выборке.",
    "When the population sigma is unknown and estimated from the sample.",
    [
      ["Когда данные всегда категориальные.", "When data are always categorical."],
      ["Когда есть только PMF биномиального распределения.", "When there is only a binomial PMF."],
      ["Когда нужно посчитать моду.", "When we need to compute the mode."]
    ],
    "Тогда неопределенность оценки sigma учитывается t-распределением.",
    "Then the uncertainty of estimating sigma is handled by the t-distribution."),
  c(77, "t-test", "assets/tests.svg",
    "Что такое степени свободы в одновыборочном t-test?",
    "What are degrees of freedom in a one-sample t-test?",
    "n - 1.",
    "n - 1.",
    [
      ["n + 1.", "n + 1."],
      ["2n - 2 всегда.", "Always 2n - 2."],
      ["Количество категорий минус 1.", "Number of categories minus 1."]
    ],
    "Одна степень свободы теряется из-за оценки выборочного среднего.",
    "One degree of freedom is lost because the sample mean is estimated."),
  c(78, "t-test", "assets/tests.svg",
    "Какая статистика используется в одновыборочном t-test?",
    "What statistic is used in a one-sample t-test?",
    "(xbar - mu0) / sqrt(S^2 / n)",
    "(xbar - mu0) / sqrt(S^2 / n)",
    [
      ["P(A union B)", "P(A union B)"],
      ["Q3 - Q1", "Q3 - Q1"],
      ["cov(x,y)/(sigma_x sigma_y) без гипотезы", "cov(x,y)/(sigma_x sigma_y) without a hypothesis"]
    ],
    "Она сравнивает наблюдаемое среднее с гипотетическим средним mu0.",
    "It compares the observed mean with the hypothesized mean mu0."),
  c(79, "Penguins", "assets/tests.svg",
    "Какая функция SciPy использовалась для одновыборочного t-test в примере с пингвинами?",
    "Which SciPy function was used for the one-sample t-test in the penguin example?",
    "st.ttest_1samp(sample, mu0)",
    "st.ttest_1samp(sample, mu0)",
    [
      ["st.ttest_ind(sample, mu0)", "st.ttest_ind(sample, mu0)"],
      ["st.f_oneway(sample, mu0)", "st.f_oneway(sample, mu0)"],
      ["st.chi2_contingency(sample, mu0)", "st.chi2_contingency(sample, mu0)"]
    ],
    "В лекции проверяли среднюю длину плавника female Adelie относительно заданного mu0.",
    "The lecture tested female Adelie flipper length against a chosen mu0."),
  c(80, "Penguins", "assets/tests.svg",
    "Что означало решение по mu0=180 мм в примере с пингвинами?",
    "What did the decision for mu0=180 mm mean in the penguin example?",
    "Нулевая гипотеза о среднем 180 мм была отвергнута.",
    "The null hypothesis of mean 180 mm was rejected.",
    [
      ["Было доказано, что все пингвины имеют 180 мм.", "It proved all penguins have 180 mm."],
      ["Данные стали категориальными.", "The data became categorical."],
      ["ANOVA была невозможна.", "ANOVA became impossible."]
    ],
    "Для mu1=187 мм лекция показывает обратный случай: H0 не отвергается.",
    "For mu1=187 mm the lecture shows the opposite case: H0 is not rejected."),
  c(81, "Две выборки", "assets/tests.svg",
    "Что проверяет независимый двухвыборочный t-test?",
    "What does an independent two-sample t-test check?",
    "Равны ли средние двух независимых популяций.",
    "Whether the means of two independent populations are equal.",
    [
      ["Равны ли категории в таблице сопряженности.", "Whether categories in a contingency table are equal."],
      ["Является ли одна переменная нормальной.", "Whether one variable is normal."],
      ["Каков IQR одной выборки.", "What the IQR of one sample is."]
    ],
    "В лекции это применялось к массам пингвинов по полу и островам.",
    "The lecture applied this to penguin body masses by sex and island."),
  c(82, "Welch", "assets/tests.svg",
    "Когда используют t-test Уэлча?",
    "When is Welch's t-test used?",
    "Когда размеры выборок или дисперсии могут отличаться.",
    "When sample sizes or variances may differ.",
    [
      ["Когда сравнивают только одну выборку с mu0.", "When comparing only one sample to mu0."],
      ["Когда данные строго категориальные.", "When data are strictly categorical."],
      ["Когда нужны только процентили.", "When only percentiles are needed."]
    ],
    "В SciPy это `st.ttest_ind(f, m, equal_var=False)`.",
    "In SciPy this is `st.ttest_ind(f, m, equal_var=False)`."),
  c(83, "Welch", "assets/tests.svg",
    "Что делает параметр equal_var=False в st.ttest_ind?",
    "What does equal_var=False do in st.ttest_ind?",
    "Запускает вариант теста Уэлча без предположения о равных дисперсиях.",
    "Runs Welch's test without assuming equal variances.",
    [
      ["Запускает chi-square test.", "Runs a chi-square test."],
      ["Удаляет все выбросы.", "Removes all outliers."],
      ["Заменяет среднее медианой.", "Replaces the mean with the median."]
    ],
    "Это более осторожный вариант для реальных групп с разным разбросом.",
    "This is a more cautious option for real groups with different spread."),
  c(84, "ANOVA", "assets/tests.svg",
    "Когда вместо нескольких t-test лучше использовать ANOVA?",
    "When is ANOVA preferable to multiple t-tests?",
    "Когда нужно сравнить средние трех и более групп.",
    "When comparing means of three or more groups.",
    [
      ["Когда есть только одна группа.", "When there is only one group."],
      ["Когда проверяется одна карта из колоды.", "When checking one card from a deck."],
      ["Когда нужно посчитать PMF.", "When computing a PMF."]
    ],
    "Много попарных t-test увеличивают риск ложных срабатываний.",
    "Many pairwise t-tests increase the risk of false positives."),
  c(85, "ANOVA", "assets/tests.svg",
    "Какие три предположения ANOVA перечислены в лекции?",
    "Which three ANOVA assumptions are listed in the lecture?",
    "Независимые выборки, нормальность популяций, равные стандартные отклонения.",
    "Independent samples, normally distributed populations, equal population standard deviations.",
    [
      ["Только равные медианы.", "Only equal medians."],
      ["Только категориальные признаки.", "Only categorical features."],
      ["Только отсутствие корреляции Пирсона.", "Only absence of Pearson correlation."]
    ],
    "Равенство стандартных отклонений называется гомоскедастичностью.",
    "Equality of standard deviations is called homoscedasticity."),
  c(86, "ANOVA", "assets/tests.svg",
    "Какая функция SciPy использовалась для ANOVA?",
    "Which SciPy function was used for ANOVA?",
    "st.f_oneway(group1, group2, group3)",
    "st.f_oneway(group1, group2, group3)",
    [
      ["st.pearsonr(group1, group2, group3)", "st.pearsonr(group1, group2, group3)"],
      ["np.outer(group1, group2, group3)", "np.outer(group1, group2, group3)"],
      ["st.binom.pmf(group1, group2, group3)", "st.binom.pmf(group1, group2, group3)"]
    ],
    "В лекции сравнивались группы пингвинов по островам.",
    "The lecture compared penguin groups by islands."),
  c(87, "Chi-square test", "assets/tests.svg",
    "Для чего используется тест Пирсона chi-square в лекции?",
    "What is Pearson's chi-square test used for in the lecture?",
    "Для проверки независимости категориальных переменных.",
    "To test independence of categorical variables.",
    [
      ["Для сравнения двух средних непрерывных выборок.", "To compare two continuous sample means."],
      ["Для вычисления медианы.", "To compute a median."],
      ["Для построения нормальной PDF.", "To plot a normal PDF."]
    ],
    "Пример: независимы ли уровень тяжести и больница.",
    "Example: whether severity level and hospital are independent."),
  c(88, "Chi-square test", "assets/tests.svg",
    "Что такое таблица сопряженности?",
    "What is a contingency table?",
    "Таблица наблюдаемых частот для комбинаций категорий двух переменных.",
    "A table of observed counts for combinations of categories of two variables.",
    [
      ["Таблица средних значений только одной переменной.", "A table of means for only one variable."],
      ["График нормальной плотности.", "A normal density plot."],
      ["Список z-score.", "A list of z-scores."]
    ],
    "В chi-square test сравниваются observed и expected counts.",
    "In a chi-square test, observed and expected counts are compared."),
  c(89, "Chi-square test", "assets/tests.svg",
    "Как вычисляется ожидаемая частота при независимости категорий?",
    "How is an expected count computed under category independence?",
    "Из маргинальных долей и итогов по строкам/столбцам.",
    "From marginal proportions and row/column totals.",
    [
      ["Как квадрат наблюдаемой частоты.", "As the square of the observed count."],
      ["Как p-value t-test.", "As the p-value of a t-test."],
      ["Как медиана всех чисел.", "As the median of all numbers."]
    ],
    "В лекции пример: доля уровня тяжести умножается на итог по больнице.",
    "In the lecture: severity proportion is multiplied by the hospital total."),
  c(90, "Chi-square test", "assets/tests.svg",
    "Какая функция SciPy возвращает chi2, p-value, dof и expected?",
    "Which SciPy function returns chi2, p-value, dof, and expected?",
    "st.chi2_contingency(observed)",
    "st.chi2_contingency(observed)",
    [
      ["st.ttest_1samp(observed)", "st.ttest_1samp(observed)"],
      ["st.f_oneway(observed)", "st.f_oneway(observed)"],
      ["np.percentile(observed)", "np.percentile(observed)"]
    ],
    "Эта функция реализует тест независимости для таблицы сопряженности.",
    "This function implements the independence test for a contingency table.")
];

const balancedDistractors = {
  1: [
    ["Они нужны в основном для EDA и визуализации, но почти не помогают делать выводы по неопределенным данным.", "They are mainly needed for EDA and visualization, but do not help much with uncertain data."],
    ["Они нужны главным образом на этапе оформления отчета и сравнения визуализаций.", "They are mainly needed at the report-writing stage and for comparing visualizations."],
    ["Они наиболее полезны при больших датасетах, где ручная проверка данных затруднена и нужна формальная оценка неопределенности.", "They are most useful with large datasets where manual checking is difficult and formal uncertainty estimates are needed."]
  ],
  2: [
    ["Набор исходов, которые считаются успешными в конкретной проверяемой гипотезе.", "The set of outcomes treated as successful in a specific tested hypothesis."],
    ["Множество событий, которым уже назначены вероятности после эксперимента.", "The set of events that already have probabilities assigned after the experiment."],
    ["Числовая функция, которая переводит каждый исход в измеряемое значение.", "A numeric function that maps each outcome to a measured value."]
  ],
  3: [
    ["Множество всех элементарных исходов, которые физически могут случиться.", "The set of all elementary outcomes that can physically occur."],
    ["Набор числовых значений, которые принимает случайная величина после измерения.", "The set of numeric values taken by a random variable after measurement."],
    ["Таблица частот, построенная по наблюдениям уже после сбора данных.", "A frequency table built from observations after data collection."]
  ],
  4: [
    ["P(A) может быть больше 1, если событие встречается чаще среднего в выборке.", "P(A) can exceed 1 if the event occurs more often than average in a sample."],
    ["P(Omega) выбирают по данным, а сумма непересекающихся событий может быть любой.", "P(Omega) is chosen from data, and disjoint event sums can be arbitrary."],
    ["Вероятность задается для исходов, а объединения событий обычно считают отдельно.", "Probability is assigned to outcomes, while event unions are usually computed separately."]
  ],
  5: [
    ["Считают долю исходов события среди всех исходов, но затем нормируют ее на среднее.", "Count the event outcomes among all outcomes, then normalize by the mean."],
    ["Берут число всех исходов и делят его на число исходов, которые не входят в событие.", "Take the total outcomes and divide by outcomes that are not in the event."],
    ["Сначала оценивают дисперсию исходов, затем используют ее как вероятность события.", "First estimate outcome variance, then use it as the event probability."]
  ],
  6: [
    ["Все исходы, которые входят в A и одновременно принадлежат другому событию B.", "All outcomes that are in A and also belong to another event B."],
    ["Событие, которое содержит A и все исходы с большей вероятностью, чем у A.", "An event containing A and all outcomes with higher probability than A."],
    ["Часть события A, которая остается после удаления наиболее редких исходов.", "The part of event A left after removing the rarest outcomes."]
  ],
  7: [
    ["Исходы, которые принадлежат A или B, но не обязательно обоим одновременно.", "Outcomes that belong to A or B, not necessarily both at the same time."],
    ["Все исходы пространства выборки, кроме тех, которые входят в A или B.", "All sample-space outcomes except those belonging to A or B."],
    ["Событие, которое получается сложением вероятностей A и B без учета пересечения.", "An event obtained by adding probabilities of A and B without considering overlap."]
  ],
  8: [
    ["Исходы, которые находятся одновременно в A и B.", "Outcomes that are simultaneously in A and B."],
    ["Все исходы пространства выборки, которые не принадлежат ни A, ни B.", "All sample-space outcomes that belong to neither A nor B."],
    ["Событие, полученное как разность вероятностей P(A) и P(B).", "An event obtained as the difference between P(A) and P(B)."]
  ],
  9: [
    ["Потому что пересечение не относится ни к A, ни к B и должно быть исключено.", "Because the intersection belongs to neither A nor B and must be excluded."],
    ["Потому что пересечение рассматривается как отдельное третье событие.", "Because the intersection is treated as a separate third event."],
    ["Потому что объединение событий считают через дополнения, а не через сумму.", "Because event union is computed through complements rather than sums."]
  ],
  10: [
    ["Когда вероятность одного события равна вероятности другого события.", "When the probability of one event equals the probability of another event."],
    ["Когда одно событие полностью содержит другое событие внутри себя.", "When one event fully contains the other event inside it."],
    ["Когда знание одного события не меняет вероятность другого события.", "When knowing one event does not change the probability of the other."]
  ],
  11: [
    ["Вероятность события B при условии, что событие A уже произошло.", "The probability of event B given that event A has already occurred."],
    ["Вероятность того, что A и B являются взаимоисключающими событиями.", "The probability that A and B are mutually exclusive events."],
    ["Вероятность события A без учета любой информации о событии B.", "The probability of event A without using any information about event B."]
  ],
  12: [
    ["Когда A и B имеют пустое пересечение и являются взаимоисключающими.", "When A and B have an empty intersection and are mutually exclusive."],
    ["Когда P(A | B) больше P(A), потому что B усиливает вероятность A.", "When P(A | B) is greater than P(A), because B increases A's probability."],
    ["Когда оба события имеют одинаковую вероятность, но могут зависеть друг от друга.", "When both events have equal probability but may still depend on each other."]
  ],
  13: [
    ["Она вычисляет вероятность события без учета предварительных знаний о гипотезе.", "It computes event probability without using prior knowledge about the hypothesis."],
    ["Она проверяет, являются ли две выборки независимыми по их средним значениям.", "It tests whether two samples are independent by their means."],
    ["Она заменяет условную вероятность обычной частотой события в выборке.", "It replaces conditional probability with the ordinary event frequency in a sample."]
  ],
  14: [
    ["Итоговая вероятность гипотезы после учета наблюдения и правдоподобия.", "The final probability of a hypothesis after evidence and likelihood are considered."],
    ["Вероятность наблюдать данные при условии, что выбранная гипотеза верна.", "The probability of observing the data assuming the chosen hypothesis is true."],
    ["Нормировочная вероятность наблюдения, общая для всех сравниваемых гипотез.", "The normalizing probability of the evidence, shared by all compared hypotheses."]
  ],
  15: [
    ["Исходная вероятность гипотезы до учета конкретного наблюдения.", "The initial probability of a hypothesis before a specific observation is used."],
    ["Итоговая вероятность гипотезы после умножения prior на evidence.", "The final probability of a hypothesis after multiplying prior by evidence."],
    ["Вероятность всех возможных наблюдений независимо от выбранной гипотезы.", "The probability of all possible observations independent of the chosen hypothesis."]
  ],
  16: [
    ["Потому что likelihood полностью определяет posterior без учета prior.", "Because likelihood fully determines the posterior without the prior."],
    ["Потому что базовые вероятности важны главным образом при равных likelihood.", "Because base rates matter mainly when likelihoods are equal."],
    ["Потому что posterior зависит от описания наблюдения сильнее, чем от частот классов.", "Because posterior depends more on the observation description than on class frequencies."]
  ],
  17: [
    ["Множество всех возможных исходов эксперимента до назначения вероятностей.", "The set of all possible experiment outcomes before probabilities are assigned."],
    ["Таблица, где каждому значению уже сопоставлена его выборочная частота.", "A table where each value already has its sample frequency assigned."],
    ["Параметр распределения, который задает его среднее значение.", "A distribution parameter that defines its expected value."]
  ],
  18: [
    ["Дискретная задается PDF, а непрерывная описывается PMF по отдельным точкам.", "A discrete variable is defined by a PDF, while a continuous one uses pointwise PMF."],
    ["Дискретная может принимать любые вещественные значения на интервале.", "A discrete variable can take any real value over an interval."],
    ["Непрерывная принимает конечный список значений, а дискретная - интервалы.", "A continuous variable takes a finite value list, while a discrete one uses intervals."]
  ],
  19: [
    ["Потому что непрерывную величину обычно измеряют только приблизительно.", "Because a continuous variable is usually measured approximately."],
    ["Потому что значение PDF в точке трактуется как вероятность этой точки.", "Because the PDF value at a point is treated as that point's probability."],
    ["Потому что CDF запрещает вычислять вероятность на интервалах значений.", "Because the CDF forbids computing probabilities over value intervals."]
  ],
  20: [
    ["Накопленную вероятность того, что непрерывная величина не превосходит x.", "The cumulative probability that a continuous variable does not exceed x."],
    ["Плотность вероятности непрерывной величины в окрестности значения x.", "The probability density of a continuous variable around value x."],
    ["Связь между двумя случайными величинами через их совместную таблицу.", "The relationship between two random variables through their joint table."]
  ],
  21: [
    ["Вероятность конкретного значения дискретной случайной величины.", "The probability of a specific value of a discrete random variable."],
    ["Плотность вероятности в точке для непрерывной случайной величины.", "The probability density at a point for a continuous random variable."],
    ["Разность между третьим и первым квартилем в выборке.", "The difference between the third and first quartiles in a sample."]
  ],
  22: [
    ["Накопленную вероятность P(X <= x) для дискретных и непрерывных величин.", "The cumulative probability P(X <= x) for discrete and continuous variables."],
    ["Вероятность ровно одного значения непрерывной величины как массу.", "The probability of exactly one continuous value as a mass."],
    ["Таблицу наблюдаемых частот для двух категориальных переменных.", "The observed-frequency table for two categorical variables."]
  ],
  23: [
    ["Самое частое значение выборки, выбранное без учета вероятностей исходов.", "The most frequent sample value chosen without considering outcome probabilities."],
    ["Значение, которое делит упорядоченные наблюдения на две равные части.", "The value that splits ordered observations into two equal parts."],
    ["Разброс случайной величины относительно среднего значения.", "The spread of a random variable around its mean."]
  ],
  24: [
    ["Средний уровень случайной величины с учетом вероятностей ее значений.", "The average level of a random variable weighted by probabilities."],
    ["Квадратный корень из стандартного отклонения случайной величины.", "The square root of the random variable's standard deviation."],
    ["Площадь под плотностью на выбранном интервале значений.", "The area under the density over a chosen interval of values."]
  ],
  25: [
    ["Стандартное отклонение равно дисперсии, деленной на размер выборки.", "Standard deviation equals variance divided by the sample size."],
    ["Стандартное отклонение равно дисперсии без изменения единиц измерения.", "Standard deviation equals variance without changing measurement units."],
    ["Стандартное отклонение равно квадрату дисперсии распределения.", "Standard deviation equals the square of the distribution variance."]
  ],
  26: [
    ["Для непрерывного времени ожидания между независимыми событиями.", "For continuous waiting time between independent events."],
    ["Для значений, равновероятных на заданном числовом интервале.", "For values that are equally likely over a chosen numeric interval."],
    ["Для проверки независимости двух категориальных переменных.", "For testing independence between two categorical variables."]
  ],
  27: [
    ["Вероятность успеха в каждом отдельном испытании.", "The probability of success in each individual trial."],
    ["Количество успехов, которое мы хотим получить в результате.", "The number of successes that we want to obtain."],
    ["Число степеней свободы, используемое в статистическом тесте.", "The number of degrees of freedom used in a statistical test."]
  ],
  28: [
    ["Количество независимых испытаний в биномиальном эксперименте.", "The number of independent trials in the binomial experiment."],
    ["Количество успехов, для которого вычисляется конкретная вероятность.", "The number of successes for which a specific probability is computed."],
    ["Вероятность получить больше k успехов в серии испытаний.", "The probability of getting more than k successes in a sequence of trials."]
  ],
  30: [
    ["Потому что P(X=4) уже включает все случаи, где пациентов больше 4.", "Because P(X=4) already includes all cases where patients exceed 4."],
    ["Потому что расходы зависят главным образом от ровно четырех пациентов с эффектами.", "Because costs depend mainly on exactly four patients having side effects."],
    ["Потому что хвостовая вероятность не используется для финансовых рисков.", "Because tail probability is not used for financial risk."]
  ],
  31: [
    ["Число успехов в фиксированном числе независимых испытаний с вероятностью p.", "The number of successes in a fixed number of independent trials with probability p."],
    ["Время ожидания между событиями, которые происходят с постоянной скоростью.", "The waiting time between events occurring at a constant rate."],
    ["Сумму квадратов независимых стандартных нормальных величин.", "The sum of squares of independent standard normal variables."]
  ],
  33: [
    ["Значения, которые равновероятны на ограниченном интервале.", "Values that are equally likely over a bounded interval."],
    ["Число успехов в серии независимых испытаний с двумя исходами.", "The number of successes in independent trials with two outcomes."],
    ["Сумму квадратов стандартных нормальных случайных величин.", "The sum of squared standard normal random variables."]
  ],
  35: [
    ["Как значение PDF в точке 10 для экспоненциального распределения.", "As the PDF value at 10 for the exponential distribution."],
    ["Как CDF(10), потому что это уже вероятность ждать больше 10 минут.", "As CDF(10), because that already means waiting more than 10 minutes."],
    ["Как PMF(10), потому что время ожидания в примере является дискретным.", "As PMF(10), because waiting time in the example is discrete."]
  ],
  36: [
    ["Потому что все реальные признаки в датасетах строго нормальны по определению.", "Because all real dataset features are strictly normal by definition."],
    ["Потому что нормальное распределение удобно описывает категориальные частоты.", "Because the normal distribution conveniently describes categorical frequencies."],
    ["Потому что нормальность помогает напрямую установить причинную связь переменных.", "Because normality helps directly establish causal relationships between variables."]
  ],
  38: [
    ["Интервал между первым и третьим квартилем распределения.", "The interval between the first and third quartiles of the distribution."],
    ["Интервал mu plus/minus one standard deviation around the mean.", "The interval mu plus/minus one standard deviation around the mean."],
    ["Интервал от минимального до максимального наблюдаемого значения.", "The interval from the minimum to the maximum observed value."]
  ],
  39: [
    ["Как сумму k независимых нормальных величин без возведения в квадрат.", "As the sum of k independent normal variables without squaring."],
    ["Как произведение k независимых стандартных нормальных величин.", "As the product of k independent standard normal variables."],
    ["Как среднее k биномиальных величин с одинаковой вероятностью успеха.", "As the mean of k binomial variables with the same success probability."]
  ],
  40: [
    ["Среднее значение генеральной совокупности, известное до сбора выборки.", "The population mean known before collecting the sample."],
    ["Сумма наблюдений, нормированная на их выборочную дисперсию.", "The sum of observations normalized by their sample variance."],
    ["Медиана наблюдений, делящая упорядоченную выборку пополам.", "The median of observations splitting the ordered sample in half."]
  ],
  41: [
    ["При росте числа испытаний исходное распределение становится нормальным.", "As the number of trials grows, the original distribution becomes normal."],
    ["При росте n каждое отдельное наблюдение стремится к математическому ожиданию.", "As n grows, each individual observation tends toward the expected value."],
    ["При большом n выборочная дисперсия обязательно становится равной нулю.", "For large n, sample variance necessarily becomes zero."]
  ],
  42: [
    ["При большом n сами исходные наблюдения становятся нормально распределенными.", "For large n, the raw original observations become normally distributed."],
    ["При большом n любая выборочная медиана совпадает с математическим ожиданием.", "For large n, any sample median equals the expected value."],
    ["При большом n p-value любого корректного теста стремится к единице.", "For large n, the p-value of any valid test tends to one."]
  ],
  43: [
    ["Она равна sigma squared times n, поэтому растет вместе с размером выборки.", "It is sigma squared times n, so it grows with sample size."],
    ["Она равна sigma squared и не зависит от размера выборки.", "It equals sigma squared and does not depend on sample size."],
    ["Она равна sigma divided by n, поэтому измеряется в других единицах.", "It equals sigma divided by n, so it has different units."]
  ],
  44: [
    ["Потому что выборочная дисперсия использует известное истинное среднее.", "Because sample variance uses the known true mean."],
    ["Потому что деление на n делает оценку слишком большой для малых выборок.", "Because division by n makes the estimate too large for small samples."],
    ["Потому что независимые наблюдения плохо подходят для оценки разброса.", "Because independent observations are poorly suited for estimating spread."]
  ],
  45: [
    ["Использует деление на n вместо n-1, чтобы оценка была менее шумной.", "Uses division by n instead of n-1 so the estimate is less noisy."],
    ["Заменяет выборочное среднее истинным средним, если оно неизвестно.", "Replaces the sample mean with the true mean when it is unknown."],
    ["Корректирует p-value после множественных сравнений между группами.", "Corrects p-values after multiple comparisons between groups."]
  ],
  46: [
    ["Разброс распределения вокруг среднего в квадратных единицах измерения.", "The spread of a distribution around the mean in squared units."],
    ["Положение центра распределения как средневзвешенное значение.", "The center location of a distribution as a weighted average."],
    ["Силу линейной связи между двумя числовыми переменными.", "The strength of linear association between two numeric variables."]
  ],
  47: [
    ["Когда распределение симметрично и не содержит экстремальных наблюдений.", "When the distribution is symmetric and has no extreme observations."],
    ["Когда среднее, медиана и мода примерно совпадают между собой.", "When the mean, median, and mode are approximately equal."],
    ["Когда выборка достаточно большая и все значения имеют одинаковый вес.", "When the sample is large enough and all values have equal weight."]
  ],
  48: [
    ["Значение, которое встречается в выборке чаще остальных значений.", "The value that appears in the sample more often than the others."],
    ["Средневзвешенное значение наблюдений с учетом вероятностей.", "The weighted average of observations accounting for probabilities."],
    ["Разброс центральных 50 процентов значений в упорядоченной выборке.", "The spread of the central 50 percent of values in an ordered sample."]
  ],
  49: [
    ["Значение, которое делит упорядоченную выборку на две равные половины.", "The value that splits the ordered sample into two equal halves."],
    ["Среднее значение выборки, чувствительное к экстремальным наблюдениям.", "The sample average, which is sensitive to extreme observations."],
    ["Разница между третьим и первым квартилем распределения.", "The difference between the third and first quartiles of a distribution."]
  ],
  50: [
    ["Значение, выше которого находится p процентов данных.", "The value above which p percent of the data lie."],
    ["Доля наблюдений, которые равны ровно выбранному значению p.", "The fraction of observations exactly equal to the chosen value p."],
    ["Вероятность отвергнуть нулевую гипотезу на уровне p.", "The probability of rejecting the null hypothesis at level p."]
  ],
  52: [
    ["Расстояние между медианой и средним значением выборки.", "The distance between the median and the sample mean."],
    ["Разность между максимальным и минимальным наблюдением.", "The difference between the maximum and minimum observation."],
    ["Интервал mean plus/minus 1.96 standard deviations.", "The interval mean plus/minus 1.96 standard deviations."]
  ],
  53: [
    ["Среднее, стандартное отклонение и доверительный интервал вокруг среднего.", "Mean, standard deviation, and a confidence interval around the mean."],
    ["Форму PDF, CDF и хвостовые вероятности одного распределения.", "The PDF shape, CDF, and tail probabilities of one distribution."],
    ["Наблюдаемые и ожидаемые частоты для категориального теста.", "Observed and expected counts for a categorical test."]
  ],
  55: [
    ["Для проверки независимости пола и вида в категориальной таблице.", "To test independence between sex and species in a categorical table."],
    ["Для сравнения формы распределений счетов между двумя группами.", "To compare the shape of bill distributions between two groups."],
    ["Для оценки среднего ожидания между приходами клиентов.", "To estimate the mean waiting time between customer arrivals."]
  ],
  56: [
    ["Для сравнения средних значений двух независимых выборок.", "To compare mean values of two independent samples."],
    ["Для проверки независимости категорий в таблице частот.", "To test category independence in a frequency table."],
    ["Для оценки хвостовой вероятности нормального распределения.", "To estimate a tail probability of a normal distribution."]
  ],
  57: [
    ["Маргинальные вероятности одной величины после суммирования по другой.", "Marginal probabilities of one variable after summing over the other."],
    ["Условную вероятность одной величины при фиксированном значении другой.", "Conditional probability of one variable at a fixed value of another."],
    ["Ковариацию двух переменных, нормированную на их стандартные отклонения.", "Covariance of two variables normalized by their standard deviations."]
  ],
  58: [
    ["Удаление влияния среднего перед вычислением ковариации двух переменных.", "Removing the mean effect before computing covariance of two variables."],
    ["Получение условной вероятности делением ячейки на сумму всей таблицы.", "Obtaining conditional probability by dividing a cell by the whole table sum."],
    ["Переход от непрерывного распределения к дискретной PMF по интервалам.", "Moving from a continuous distribution to a discrete PMF by intervals."]
  ],
  59: [
    ["Как отношение соответствующей ячейки к общему числу всех наблюдений.", "As the cell count divided by the total number of all observations."],
    ["Как сумма всех ячеек в строке и столбце без нормировки.", "As the sum of all cells in the row and column without normalization."],
    ["Как произведение маргинальных вероятностей, даже если есть зависимость.", "As the product of marginal probabilities even if dependence exists."]
  ],
  60: [
    ["Когда ковариация равна нулю, даже если остается возможная нелинейная связь.", "When covariance equals zero, even if a nonlinear relationship may still exist."],
    ["Когда средние значения X и Y совпадают, а дисперсии примерно одинаковы.", "When the means of X and Y are equal and the variances are approximately equal."],
    ["Когда условная вероятность заметно больше соответствующей маргинальной вероятности.", "When conditional probability is noticeably greater than the corresponding marginal probability."]
  ],
  61: [
    ["Нормированную линейную связь двух переменных в диапазоне от -1 до 1.", "The normalized linear relationship between two variables from -1 to 1."],
    ["Разброс одной переменной вокруг ее собственного среднего значения.", "The spread of one variable around its own mean."],
    ["Вероятность того, что две категориальные переменные независимы.", "The probability that two categorical variables are independent."]
  ],
  62: [
    ["Ковариации между каждой парой разных переменных.", "Covariances between each pair of different variables."],
    ["Корреляции Пирсона между нормированными признаками.", "Pearson correlations between normalized features."],
    ["Средние значения переменных, использованных в матрице.", "The means of the variables used in the matrix."]
  ],
  63: [
    ["Потому что ковариация проверяет любую зависимость, включая нелинейную.", "Because covariance tests any dependence, including nonlinear dependence."],
    ["Потому что независимость и нулевая ковариация являются одним и тем же условием.", "Because independence and zero covariance are exactly the same condition."],
    ["Потому что ковариация не зависит от формы связи и масштаба переменных.", "Because covariance is independent of relationship shape and variable scale."]
  ],
  64: [
    ["Она усиливает ковариацию, чтобы большие признаки сильнее влияли на вывод.", "It amplifies covariance so larger-scale features influence the conclusion more."],
    ["Она превращает любую нелинейную зависимость в сильную линейную связь.", "It turns any nonlinear dependence into a strong linear relationship."],
    ["Она заменяет ковариационную матрицу таблицей категориальных частот.", "It replaces the covariance matrix with a categorical frequency table."]
  ],
  65: [
    ["От 0 до 1, если связь между переменными положительная.", "From 0 to 1 when the relationship between variables is positive."],
    ["От минус бесконечности до плюс бесконечности, как у ковариации.", "From minus infinity to plus infinity, like covariance."],
    ["От -100 до 100 процентов после умножения на размер выборки.", "From -100 to 100 percent after multiplying by sample size."]
  ],
  67: [
    ["Гипотеза, которую принимают как доказанную, если p-value больше alpha.", "A hypothesis accepted as proven if the p-value is greater than alpha."],
    ["Утверждение, которое обычно говорит, что между группами есть различие.", "A claim that usually states there is a difference between groups."],
    ["Любая альтернативная модель, обученная после анализа распределений.", "Any alternative model trained after distribution analysis."]
  ],
  68: [
    ["Базовое утверждение, которое проверяют и затем считают доказанным при большом p-value.", "A baseline claim that is tested and then considered proven if the p-value is large."],
    ["Вероятность получить наблюдение при условии, что нулевая гипотеза верна.", "The probability of obtaining the observation assuming the null hypothesis is true."],
    ["Порог значимости, который выбирают перед вычислением статистики и p-value.", "The significance threshold chosen before computing the statistic and p-value."]
  ],
  69: [
    ["Вероятность наблюдать настолько же экстремальный результат при верной H0.", "The probability of observing a result this extreme when H0 is true."],
    ["Критическое значение статистики, вычисленное по данным после теста.", "The critical statistic value computed from the data after the test."],
    ["Оценка доли ошибок модели на отложенной тестовой выборке.", "An estimate of the model error rate on a held-out test sample."]
  ],
  70: [
    ["Вероятность того, что нулевая гипотеза истинна после учета данных.", "The probability that the null hypothesis is true after observing the data."],
    ["Порог ошибки, который заранее выбирают для отклонения H0.", "The error threshold chosen in advance for rejecting H0."],
    ["Вероятность получить ровно такое же значение статистики и не более экстремальное.", "The probability of getting exactly the same statistic and nothing more extreme."]
  ],
  71: [
    ["Нулевая гипотеза считается доказанной и больше не требует проверки.", "The null hypothesis is considered proven and no longer needs testing."],
    ["Нулевую гипотезу не отвергают, потому что результат достаточно обычный.", "The null hypothesis is not rejected because the result is sufficiently ordinary."],
    ["Уровень значимости alpha увеличивают, пока решение не изменится.", "The significance level alpha is increased until the decision changes."]
  ],
  72: [
    ["Вероятность получить наблюдение не менее экстремальное при H0.", "The probability of obtaining an observation at least as extreme under H0."],
    ["Разницу между третьим и первым квартилем в стандартных отклонениях.", "The difference between the third and first quartiles in standard deviations."],
    ["Число независимых испытаний, использованных в биномиальном распределении.", "The number of independent trials used in a binomial distribution."]
  ],
  73: [
    ["Когда sigma популяции неизвестна и заменяется выборочным стандартным отклонением.", "When population sigma is unknown and replaced by the sample standard deviation."],
    ["Когда сравнивали средние двух независимых выборок с разными дисперсиями.", "When comparing means of two independent samples with unequal variances."],
    ["Когда проверяли независимость категорий в таблице сопряженности.", "When testing category independence in a contingency table."]
  ],
  74: [
    ["Потому что 1.96 - это среднее стандартного нормального распределения.", "Because 1.96 is the mean of the standard normal distribution."],
    ["Потому что 95 процентов распределения относят к одному правому хвосту.", "Because 95 percent of the distribution is assigned to one right tail."],
    ["Потому что alpha=0.05 оставляет 5 процентов в каждом хвосте.", "Because alpha=0.05 leaves 5 percent in each tail."]
  ],
  75: [
    ["Монета смещена, поэтому число орлов лучше описывать распределением B(6, p).", "The coin is biased, so the number of heads is better described by B(6, p)."],
    ["Монета честная, поэтому каждый результат серии из шести бросков имеет p=0.5.", "The coin is fair, so each six-toss sequence has probability p=0.5."],
    ["Монета нечестная, если в шести бросках выпал хотя бы один орел.", "The coin is unfair if at least one head appears in six tosses."]
  ],
  76: [
    ["Когда известна sigma популяции и проверяется среднее большой выборки.", "When population sigma is known and the mean of a large sample is tested."],
    ["Когда сравниваются частоты категорий в таблице сопряженности.", "When category frequencies in a contingency table are compared."],
    ["Когда нужно оценить вероятность успехов в биномиальном эксперименте.", "When estimating success probabilities in a binomial experiment."]
  ],
  77: [
    ["n + 1, потому что одна степень свободы добавляется при оценке среднего.", "n + 1, because one degree of freedom is added when estimating the mean."],
    ["2n - 2 для любого t-test независимо от числа сравниваемых выборок.", "2n - 2 for any t-test regardless of the number of compared samples."],
    ["Число категорий минус 1, как в критерии независимости chi-square.", "The number of categories minus 1, as in the chi-square independence test."]
  ],
  80: [
    ["Нулевая гипотеза о среднем 180 мм не была отвергнута по данным.", "The null hypothesis of mean 180 mm was not rejected by the data."],
    ["Тест доказал, что среднее всех пингвинов точно равно 180 мм.", "The test proved that the mean of all penguins is exactly 180 mm."],
    ["Значение 180 мм использовалось как выборочное среднее без проверки.", "The 180 mm value was used as the sample mean without testing."]
  ],
  81: [
    ["Равна ли дисперсия одной популяции заранее заданному значению.", "Whether the variance of one population equals a predefined value."],
    ["Независимы ли две категориальные переменные в таблице частот.", "Whether two categorical variables are independent in a frequency table."],
    ["Совпадает ли среднее одной выборки с заданным mu0.", "Whether one sample mean matches a predefined mu0."]
  ],
  82: [
    ["Когда две выборки имеют одинаковый размер и заранее равные дисперсии.", "When two samples have equal size and known equal variances."],
    ["Когда сравнивается одна выборка с фиксированным средним mu0.", "When one sample is compared with a fixed mean mu0."],
    ["Когда проверяется независимость строк и столбцов таблицы сопряженности.", "When independence of rows and columns in a contingency table is tested."]
  ],
  83: [
    ["Запускает обычный двухвыборочный t-test с общей объединенной дисперсией.", "Runs the ordinary two-sample t-test with a pooled common variance."],
    ["Заставляет SciPy считать, что обе выборки имеют равный размер.", "Forces SciPy to assume both samples have equal size."],
    ["Переключает тест на сравнение медиан вместо сравнения средних.", "Switches the test to compare medians instead of means."]
  ],
  84: [
    ["Когда нужно сравнить одну выборку с фиксированным средним значением.", "When comparing one sample with a fixed mean value."],
    ["Когда нужно проверить независимость двух категориальных признаков.", "When testing independence of two categorical features."],
    ["Когда нужно сравнить две группы с разными дисперсиями.", "When comparing two groups with unequal variances."]
  ],
  85: [
    ["Независимые выборки, равные медианы, одинаковый размер всех групп.", "Independent samples, equal medians, equal size of all groups."],
    ["Нормальность выборок, разные дисперсии, зависимые наблюдения.", "Normal samples, unequal variances, dependent observations."],
    ["Категориальные признаки, таблица сопряженности, большие ожидаемые частоты.", "Categorical features, contingency table, large expected counts."]
  ],
  87: [
    ["Для сравнения средних трех и более независимых групп.", "To compare the means of three or more independent groups."],
    ["Для проверки среднего одной непрерывной выборки против mu0.", "To test one continuous sample mean against mu0."],
    ["Для вычисления корреляции между двумя числовыми признаками.", "To compute correlation between two numeric features."]
  ],
  88: [
    ["Таблица средних значений непрерывной переменной по нескольким группам.", "A table of mean values of a continuous variable across groups."],
    ["Матрица ковариаций между всеми числовыми признаками датасета.", "A covariance matrix between all numeric features in a dataset."],
    ["Таблица p-values, полученных после нескольких статистических тестов.", "A table of p-values obtained after several statistical tests."]
  ],
  89: [
    ["Из среднего значения всех ячеек и числа степеней свободы теста.", "From the mean of all cells and the test degrees of freedom."],
    ["Из наблюдаемой ячейки, возведенной в квадрат и деленной на p-value.", "From the observed cell squared and divided by the p-value."],
    ["Из стандартного отклонения каждой строки и суммы по столбцам.", "From each row standard deviation and column totals."]
  ]
};

cards.forEach(card => {
  if (balancedDistractors[card.id]) {
    card.choices = [
      card.choices[0],
      ...balancedDistractors[card.id].map(item => ({ ru: item[0], en: item[1] }))
    ];
  }
});
