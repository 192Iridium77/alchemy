const bookHeight = "260";

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

export interface Review extends Partial<Component> {
  image: Partial<Image>;
  columns?: string;
  title: string;
  author: string;
  rating: number;
  quote: string;
  text: string;
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

const articles: Article[] = [
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
    title: "Shelf Worthy Business Books",
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
      // {
      //   type: "markdown",
      //   html: `
      //       <p><b>The Personal MBA</b> by <i>Josh Kaufman</i></p>
      //       <img src="https://m.media-amazon.com/images/I/41hATmwd5LL.jpg" style="height: ${bookHeight}px;"/>
      //       <p>
      //         I certainly never went to Business School and I'm surely not the only Software Engineer that did not even know what an MBA (Masters of Business Administration) even is!
      //         Kaufman's 'The Personal MBA' is a comprehensive introduction to business concepts, from psychological and biological drives that businesses aim to meet, to business models and core concepts like 'the bottom line' and
      //         the effects of competition. This book has acted as an excellent introduction to a wide variety of concepts that should be relevant to anyone with a job.
      //       </p>
      //       <p>5/5 Kaufman takes what could be a very dry subject and makes it sharp and accessible.</p>

      //       <br />
      //     `,
      // },
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

export default articles;
