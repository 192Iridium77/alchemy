interface Component {
  type: "markdown" | "image" | "review";
}

export interface Markdown extends Partial<Component> {
  html: string;
  columns?: number;
}

export interface Image extends Partial<Component> {
  url: string;
  columns?: string;
  alt: string;
}

interface Video {
  url: string;
}

export interface Review extends Partial<Component> {
  image: Partial<Image>;
  columns?: string;
  title: string;
  author: string;
  rating: number;
  quote: string;
  text: string;
  video?: Video;
}

interface LocalImage {
  filename: string;
  extension: string;
  alt: string;
}

interface Article {
  title: string;
  slug: string;
  description: string;
  components: (Markdown | Image | Review)[];
  author: string;
  draft: boolean;
  publishedDate: Date;
  image: LocalImage;
}

export interface ArticleComponent {
  html: string;
  columns: number;
}

export const articles: Article[] = [
  {
    title: "Shelf Worthy: Finance",
    slug: "must-reads-finance",
    description: `<p>The Rich will tell you over and over, what you need in order to become rich is information. </p>`,
    image: {
      filename: "wallstreetbull2",
      extension: "png",
      alt: "Wall Street Bull",
    },
    components: [
      {
        type: "markdown",
        html: `
          <p>It is said by those who have obtained riches that if you can read 50 of the greatest finance books you can become wealthy. In this article, I list all of the books I have chosen as pavers for the path towards financial success. Here they are:</p>
        `,
      },
      {
        type: "review",
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        image: {
          url: "https://m.media-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
        },
        rating: 4.5,
        quote:
          "The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.",
        text: `<p>Rich Dad Poor Dad has become a classic in the financial literature genre. The book provides a unique perspective on money and financial success through a parable of Kiyosaki's two fathers: his biological father, whom he refers to as the "poor dad," and his friend's father, whom he refers to as the "rich dad."</p>
        <p>Through this narrative, Kiyosaki shares lessons he learned from both men about money, work, and financial literacy. One of the main themes of the book is the importance of financial education and the need to move beyond traditional ways of thinking about work and wealth. Kiyosaki argues that the traditional model of getting a good education, finding a stable job, and working hard to climb the corporate ladder is no longer sufficient in today's economy.</p>
        <b>Why read Rich Dad Poor Dad?</b>
        <p>There is a good chance that if you have learned finance from family and school teachers that you have learned how to be middleclass or even poor. Rich Dad introduces a mindset you may never have had access too, or may never have even seen before.</p>
        <b>Takeaways</b>
        <ul>
          <li>Growth in wages has instead gone to the entrepreneurs and investors, not employees.</li>
          <li>Job is an acronym for "Just Over Broke"</li>
          <li>Keep your daytime job, but mind your own business, purchase assets like stocks, bonds, businesses you don't have to run (that's a job), patents and real estate.</li>
          <li>Companies: Earn, Spend, pay Taxes. Employees: Earn, pay Taxes, Spend.</li>
          <li>Don't work for money, work to learn and gain assets. You either purchase assets, or create them.</li>
          <li>"Saving is for losers." Since 1971, money was decoupled from gold, and is now staked entirely on trust. Your money in the bank decreases in value every time the market crashes as the government prints money to reduce the real value of its debts.</li>
          <li>Your house is a liablity. It doesn't generate any cashflow, instead it takes money out of your pocket. An asset is a commodity you own that generates cashflow, focus on obtaining assets, not your income.</li>
          <li>The rich will always pay less money in taxes, they don't work for money, money works for them. Life is a team game, the rich have a team of political influencers, laywers, brokers and accountants that come together to magic tax away. Governments get their tax from middle class workers.</li>
          <li>Taxing the rich has historically failed every time. The rich play a different game than the middle class, and the taxes end up hitting them instead.</li>
          <li>When your kids ask for a swimming pool, don't say 'I can't afford that!', instead ask 'How can we afford it?'. The former shuts down your brain, the later opens your mind to opportunities.</li>
          <li>Seek teachers who have actually done what you are trying to do.</li>
          <li>Utilize your emotions. Greed is the cure to lazyness, it makes life exciting so use it.</li>
          <li>"Cynics Criticise, Winners analyse". Don't listen to the many people who will <i>chicken little</i> you.</li>
        </ul>
        <p>In the book rober states that you should "pay yourself first". I believe this is the most frightening advice he has. To not pay a mortgage and instead invest in shares sounds like a sure way to set your finances on fire. I do put 20% of my own money into deposits, and hope to use this to work towards assets, but I make sure to pay the mortgage first.</p>
        <p>Kiyosaki has been an author since 1973 he has written 30 books and also offers a free game called <a href="https://www.richdad.com/products/cashflow-classic">CashFlow</a> you can play that is as fun as it is educational.</p>
        <p>It has been said before that Rich Dad Poor Dad does not offer steps to become wealthy, this seems to be partly true. He can't tell you to go and buy that 1 bedroom appartment in a neighbourhood 20km from your home, that is the blank for you to fill in, and if you take his principles and try to apply them you will find the opportunities.</p>`,
        video: {
          url: "https://www.youtube.com/watch?v=azq0S0DKS50",
        },
      },
      {
        type: "review",
        title: "Motivated Money",
        author: "Peter Thornhill",
        image: {
          url: "https://m.media-amazon.com/images/I/41kMkYpyCcL.jpg",
        },
        rating: 4.5,
        quote:
          "We're frightened of things we do not understand. Knowledge is power. And the sad part is that too many people have really very little knowledge and easily frightened by what what the hell is going on around them.",
        text: `<p>Motivated Money provides a radically different view to that of Kiyosaki's Rich Dad Poor Dad. This book offers the 'safe, boring and practical' path towards riches.</p>
        <p>Peter shows that if you were to have invested $100,000 into Australian industrials stocks in the 80's today you would be worth more than $17 million!</p>
        <p>Peter's writing is full of wisdom, he is clearly well read and shares deep thoughts about where our civilization is headed and the psychology of money.</p>`,
      },
      {
        type: "review",
        title: "The Psychology of Money",
        author: "Morgan Housel",
        image: {
          url: "https://m.media-amazon.com/images/I/41v+g6LqafL.jpg",
        },
        rating: 4,
        quote:
          "Doing well with money isn't necessarily about what you know. It's about how you behave. And behaviour is hard to teach, even to really smart people.",
        text: `<p>The Psychology of Money is a book written by Morgan Housel that explores the complex and often irrational ways that people think about and behave with money. Through a series of engaging and thought-provoking essays, Housel examines the psychological biases, beliefs, and behaviors that shape our financial decisions and shape our relationship with money.</p>

        <p>One of the key themes of the book is the idea that our emotional relationship with money can have a significant impact on our financial well-being. Housel argues that many of the financial mistakes we make are driven by our emotional responses to money, and he encourages readers to become more aware of these emotional triggers in order to make better financial decisions.</p>
        
        <p>In addition to examining the psychological aspects of money, the book also provides practical advice on topics such as saving, investing, and managing debt. Housel's writing is engaging and easy to understand, and he effectively uses real-life examples and anecdotes to illustrate his points.</p>
        
        <p>Overall, The Psychology of Money is a must-read for anyone looking to gain a deeper understanding of their own financial behavior and make better financial decisions. It is a thought-provoking and informative book that offers valuable insights into the psychological factors that shape our relationship with money.</p>`,
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("12/30/2022 15:00"),
  },
  {
    title: "Should your code be public?",
    slug: "public-vs-private-repos",
    description:
      "<p>It's a little scary not knowing who might be looking through your code or what they might do with it. But really, what could they do?</p>",
    image: {
      filename: "LockAndKeys",
      extension: "jpg",
      alt: "LockAndKeys",
    },
    components: [
      {
        type: "markdown",
        html: `
            <p>Hackers could find bugs and exploit your public services. This has happened to google&rsquo;s implementations of Android, but what they also found was that the public was able to alert them of vulnerabilities in the software and being exposed to attackers makes their software more resilient.</p>

            <p>When you make your code public, employers get a glimpse into your skills and interests. They can see how you organise folders, how you solve problems, segregate code and what tools you like to use. This is likely good for you, so long as you have your best foot forwards.</p>

            <p>Companies could steal your prized ideas and code and make millions off of your hard work and creation. So instead of google buying your IP and company for millions, they could just fork your repo and execute your idea with superior man power. GraphQL is open and nobody has 'stolen' it, so why would they steal your code?</p>

            <p>Researchers can use public code repositories to study software developers and to help build AI like github copilot.</p>

            <p>Releasing your code out to the public may have positive impacts for people across the world. People may utilise your code to build up a ground breaking idea, or they may just read it and learn new patterns and ideas that could make them better at coding. They might use it in their businesses to help millions of people.</p>

            <p>Software engineers from anywhere in the world might see your ideas and goals and if they happen to share your interest they may contribute their skills and effort to make it better.</p>

            <p>So, should you make your personal code public? It is risky, but it seems to be an act of generosity. Generous people attract generous people, but they are vulnerable to exploitation. Should a company make all of their code public? Likely not, since much of their data is private and effort would need to be invested to ensure it is not leaked.</p>
            
            <p>Maybe it depends heavily on what you are coding? If you build a virus to understand it, but then hackers take it and use it, then you would be considered a fool.</p>`,
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("07/01/2022 18:00"),
  },
  {
    title: "Shelf Worthy: Business",
    slug: "must-reads-business",
    description: `<p>Here is a list of books that have inspired deeper conversations in my workplace about business.</p>`,
    image: {
      filename: "library",
      extension: "jpg",
      alt: "Library",
    },
    components: [
      {
        type: "markdown",
        html: `
      <p>As a Software Engineer I believe it is important that we understand the landscape that we operate in. 
      We all must choose where we work and who we work with, and in order to make the best choice
      we need to know what makes a good business, just as if we were investing shares into a company we should want to know as much as possible.
      We also need to understand what makes a great business so that we know what to strive for.</p>
      `,
      },
      {
        type: "review",
        title: "Good to Great",
        author: "Jim Colins",
        image: {
          url: "https://m.media-amazon.com/images/I/41FNZJgQbLL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        },
        rating: 5,
        quote:
          "The purpose of bureaucracy is to compensate for incompetence and lack of discipline",
        text: `<p>
          In this book, Jim asks how a company can significantly outperform the market.
          He and his research team investigate famous top performing American companies like Walgreens,
          Fanny May and Gillete and uncover a handful of principles that these businesses operated on that put them way out in front of the pack.
          Good to Great shows how important it is to have leadership without hubris, to have great people with decidation and discipline that look honestly at their own flaws and try to better themselves, and to that there is no great moment, but a continual push of the flywheel to achieve greatness.
          </p>
          <p>
            Not only does this book show how Great companies operate, I find it also parallels what it takes to do great things in life.
            The dangers for business are just as those for your personal life. Just as in a great business, your family will not last if it is lead by egoism. For the same reason that you choose the right workers, you must select the right friends, and 
            to do great things, you must push that flywheel every day for a long time. Just as you reflect honestly on your own shortcomings, a business must do the same regularly in order to truly thrive.
          </p>`,
      },
      {
        type: "review",
        title: "The Personal MBA",
        author: "Josh Kaufman",
        image: {
          url: "https://m.media-amazon.com/images/I/41hATmwd5LL.jpg",
        },
        rating: 5,
        quote:
          "Improve by 1% a day, and in just 70 days, you’re twice as good.",
        text: `<p>
          I certainly never went to Business School and I'm surely not the only Software Engineer that did not even know what an MBA (Masters of Business Administration) even is! 
          Kaufman's 'The Personal MBA' is a comprehensive introduction to business concepts, from psychological and biological drives that businesses aim to meet, to business models and core concepts like 'the bottom line' and
          the effects of competition. This book has acted as an excellent introduction to a wide variety of concepts that should be relevant to anyone with a job.
        </p>`,
      },
      {
        type: "review",
        title: "Zero to One",
        author: "Peter Thiel",
        image: {
          url: "https://m.media-amazon.com/images/I/51JkDEpHUQL.jpg",
        },
        rating: 5,
        quote: "Monopoly is the condition of every successful business.",
        text: `<p>Zero to One is a business and entrepreneurship book written by Peter Thiel, co-founder of PayPal and early investor in companies such as Facebook and LinkedIn. In the book, Thiel argues that the key to creating value in the world is to &quot;go from zero to one,&quot; meaning to create something new and innovative rather than simply copying what already exists.</p>

        <p>Thiel argues that the world is filled with opportunities for entrepreneurs to create new technologies, products, and services that have the potential to change the world. He encourages readers to think big and to focus on creating unique value rather than just competing in crowded markets.</p>
        
        <p>One of the key themes of the book is the importance of seeking out &quot;monopoly&quot; opportunities, or areas where a company can be the only player in a particular market. Thiel contends that these types of opportunities are the most likely to yield massive returns and to create lasting value.</p>
        
        <p>Overall, Zero to One is a must-read for entrepreneurs and business leaders looking for practical advice on how to create and sustain a successful company. It is an inspiring and thought-provoking read that encourages readers to think differently about the world of business and innovation.</p>`,
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("05/12/2022 13:00"),
  },
  {
    title: "Tech Drive",
    slug: "tech-drive",
    description:
      "<p>Do you remember what it was like when you first discovered programming? Software Engineers asked share their experience as awe at the potential that opens up coupled with desire to discover more.</p>",
    image: {
      filename: "cityFeature",
      extension: "jpg",
      alt: "City",
    },
    components: [
      {
        type: "markdown",
        html: `
            <p>When I first started to code, the endless potential was intoxicating. I learned python, bash and C while playing around with Arduinos and a Raspberry Pi 3B and wanted to learn everything. I wanted to control the appliances around me, to make the heater turn on in the morning, to make a farm that automatically grows produce and to build solar panels to power my microcontrollers and light up my room and power the fan in the summer.</p>
            
            <p>I wished to do this every day so I spiced up my resume and applied for developer jobs and was eventually hired at a start up agency. On the back of the fumes of this passion I often stayed in the office and would come home at 11pm at night. Not once though did I really think carefully about what I was doing. I think it is often the case for programmers that they are living on this excitement, without much of a real plan, we may not stop to think about what we are aiming to achieve.</p>
            
            <p>Last month I discovered a book called The Passionate Programmer by Chad Fowler. In this book Chad asks us to look at are careers like investments into a company. You would never invest your money in a company without really researching first! You might even consider re-evaluating your investment every quarter or so. Inspired by this, I gave my own career pathway some love and care, and in doing so I aim for higher and harder goals in my work. This act of aiming higher as the Author of The Art of Impossible suggests when implemented correctly enhances your motivation by 11-25%.</p>
            
            <p>Finding where to aim your career can be a real challenge however. What if nobody will pay you to do what you love to do? What if you hate doing what people would pay you big money to do? Perhaps you don't know what pathways are available. What we really want is to find the cross section where we are maximally interested in a field or topic, while still catering to the market.</p>

            <p>I found career options for software development by searching online and using similar career suggestions on common salary websites. If there are some missing, it&rsquo;s either because I have no interest in that area or am not aware of it yet. The interest level I determined using a scale suggested by the book &ldquo;The Art of the Impossible&rdquo;, you can gauge your interest based on whether you would spend an entire weekend studying or working on this topic, getting in touch with specialists or reading books on the topic. The market value I determined using average salaries for Australia, this could look very different for you based on just location, but you could also take into account the number of job postings available for the job.</p> 
            
            <p>The key to this table is the Interest * Value column. Here I have presumed that having an interesting job and having a valuable job are equally weighted, and having both together multiplies the value because the two have highest synergy together. I term this the Career Investment Score. After sorting my career options by this value, I could more easily determine an optimal pathway forwards. Before making this chart, I was considering Embedded software and Web app development to be my best options, now I have a much broader picture.</p>
            
            <p>One of the challenges that this plot hasn&rsquo;t overcome is the difficulty and investment requirements for particular career options. The glaring example being that software architecture requires years of experience in general software development, but regardless it has given me a much needed higher goal to aim for. I figure making an app that combines this chart with a skills tree could help give people who are lost in their careers a highly personalised map forward.</p>
            
            <p>In this article, I have set out to take control of my career and to set higher goals to achieve a career I can be happy in and proud of, and using this table I feel I have carved a new way forward. I hope that I can make this easy for other people to try it too.</p>
          `,
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("08/07/2021 15:00"),
  },
  {
    title: "Code confidence with Typescript",
    slug: "code-confidence-with-typescript",
    description:
      "<p>It can be daunting working with code repositories written by other developers. For example, what do we expect a variable like <code>textureDetail</code> to look like? It could be a string, a file object with a name, date, url and kb size, or even a base64 image hash for all we know. How can we confidently write code in this scenario?</p>",
    image: {
      filename: "japanPlaza",
      extension: "jpg",
      alt: "City",
    },
    components: [
      {
        type: "markdown",
        html: `
          <p>We could do a console.log for textureDetail, cross our fingers and hope it&rsquo;s just a string. We boot up the project and run it, pull down a copy of the data and log out our variable, and soon enough our terminal prints an object with eight key-value pairs! Yes! We can now confidently build our feature.</p>
  
          <p>But wait. What if this is a specific case where this object is missing a type property, which the hack-happy developer taped together to conditionally turn the whole textureDetail into a 3D model? Now all of the 3D models are broken, our clients are disappointed and all we can do is blame the previous coder.</p>
          
          <p>What would it take for us to avoid this and be able to confidently make changes that are required of us? Perhaps we can take advantage of typescript. Installing typescript into the project will still run our javascript files, so we can roll out typing into the project and slowly tame the jungle. Slack once made this change and discovered many type errors that were never picked up, how many might you find in your projects? [https://slack.engineering/typescript-at-slack/].</p>
          
          <p>With typescript we can now use our programming skills to infer what kind of data we are dealing with and save our team mates the trouble. Not to mention the intellisense that comes with typescript saves us extra time spent checking the documentation for our modules. It may seem like a lot of learning at first, and extra work that needs to be done.</p>
          
          <p>The only reason I can currently see not to use typescript is when you have not learned enough to write it fluently and are pressed for a deadline on a project that may only have a year lifespan. Even if your project is simple, at least typescript reassures other developers of its simplicity.</p>
          `,
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("07/03/2021 09:00"),
  },
];

export const apps = [
  {
    url: "https://subrosa.alchemy-tech.com",
    title: "Subrosa",
    description: "An app for reading stories",
    image: {
      filename: "SubrosaLogo",
      extension: "svg",
      alt: "Subrosa Logo",
    },
  },
  {
    url: "https://arcade.alchemy-tech.com",
    title: "Arcade",
    description: "An Arcade for Vincent's Scratch Games",
    image: {
      filename: "ArcadeLogo",
      extension: "png",
      alt: "Alchemy Arcade Logo",
    },
  },
  {
    url: "https://money.alchemy-tech.com",
    title: "Alchemy Money",
    description: "A Mortgage Calculator",
    image: {
      filename: "MoneyLogo",
      extension: "png",
      alt: "Alchemy Money Logo",
    },
  },
];
