import Article from "./model";

const articles = [
  new Article({
    title: "Public Git Repos",
    slug: "public-vs-private-repos",
    description:
      "<p>It's a little scary not knowing who might be looking through your code or what they might do with it. But really, what could they really do?</p>",
    image: {
      filename: "LockAndKeys",
      extension: "jpg",
      alt: "LockAndKeys",
    },
    components: [
      {
        type: "markdown",
        data: {
          html: `
            <p>Hackers could find bugs and exploit your public services. This has happened to google&rsquo;s implementations of Android, but what they also found was that the public was able to alert them of vulnerabilities in the software and being exposed to attackers makes their software more resilient.</p>

            <p>When you make your code public, employers get a glimpse into your skills and interests. They can see how you organise folders, how you solve problems, segregate code and what tools you like to use. This is likely good for you, unless you fear their judgement.</p>

            <p>Companies could steal your prized ideas and code and make millions off of your hard work and creation. So instead of google buying your IP and company for millions, they could just fork your repo and execute your idea with superior man power. Though, GraphQL is open and nobody has 'stolen' it, so why would they steal your code?</p>

            <p>Researchers can use public code repositories to study software developers and to help build AI like github copilot.</p>

            <p>Releasing your code out to the public may have positive impacts for people across the world. People may utilise your code to build up a ground breaking idea, or they may just read it and learn new patterns and ideas that could make them better at coding. They might use it in their businesses to help millions of people.</p>

            <p>Software engineers from anywhere in the world might see your ideas and goals and if they happen to share your interest they may contribute their skills and effort to make it work.</p>

            <p>So, should you make your code public? It is risky, but it seems to be an act of generosity. Generous people attract generous people, but they are vulnerable to exploitation.</p>

            <p>Whether you write public code depends on your confidence, courage and generosity.</p>`,
        },
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("07/01/2022 18:00"),
  }),
  new Article({
    title: "Must Reads - Business",
    slug: "must-reads-business",
    description:
      "<p>At Sine, I have discovered that many of my coworkers love to listen to audio books. I thought it would be exciting if we could share book lists in all sorts of categories like business, leadership and finance.</p>",
    image: {
      filename: "library",
      extension: "jpg",
      alt: "Library",
    },
    components: [],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("05/12/2022 13:00"),
  }),
  new Article({
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
        data: {
          html: `
            <p>When I first started to code, the endless potential was intoxicating. I learned python, bash and C while playing around with Arduinos and a Raspberry Pi 3B and wanted to learn everything. I wanted to control the appliances around me, to make the heater turn on in the morning, to make a farm that automatically grows produce and to build solar panels to power my microcontrollers and light up my room and power the fan in the summer.</p>
            
            <p>I wished to do this every day so I spiced up my resume and applied for developer jobs and was eventually hired at a start up agency. On the back of the fumes of this passion I often stayed in the office and would come home at 11pm at night. Not once though did I really think carefully about what I was doing. I think it is often the case for programmers that they are living on this excitement, without much of a real plan, we may not stop to think about what we are aiming to achieve.</p>
            
            <p>Last month I discovered a book called The Passionate Programmer by Chad Fowler. In this book Chad asks us to look at are careers like investments into a company. You would never invest your money in a company without really researching first! You might even consider re-evaluating your investment every quarter or so. Inspired by this, I gave my own career pathway some love and care, and in doing so I aim for higher and harder goals in my work. This act of aiming higher as the Author of The Art of Impossible suggests when implemented correctly enhances your motivation by 11-25%.</p>
            
            <p>Finding where to aim your career can be a real challenge however. What if nobody will pay you to do what you love to do? What if you hate doing what people would pay you big money to do? Perhaps you don't know what pathways are available. What we really want is to find the cross section where we are maximally interested in a field or topic, while still catering to the market. To achieve this, I decided to apply data and metrics like so:</p>

            * Table here *

            <p>Your list could be very different from this one depending on your options and interests. I found career options for software development by searching online and using similar career suggestions on common salary websites. If there are some missing, it&rsquo;s either because I have no interest in that area or am not aware of it yet. The interest level I determined using a scale suggested by the book &ldquo;The Art of the Impossible&rdquo;, you can gauge your interest based on whether you would spend an entire weekend studying or working on this topic, getting in touch with specialists or reading books on the topic. The market value I determined using average salaries for Australia, this could look very different for you based on just location, but you could also take into account the number of job postings available for the job.</p>
            
            <p>The key to this table is the Interest * Value column. Here I have presumed that having an interesting job and having a valuable job are equally weighted, and having both together multiplies the value because the two have highest synergy together. I term this the Career Investment Score. After sorting my career options by this value, I could more easily determine an optimal pathway forwards. Before making this chart, I was considering Embedded software and Web app development to be my best options, now I have a much broader picture.</p>
            
            <p>One of the challenges that this plot hasn&rsquo;t overcome is the difficulty and investment requirements for particular career options. The glaring example being that software architecture requires years of experience in general software development, but regardless it has given me a much needed higher goal to aim for. I figure making an app that combines this chart with a skills tree could help give people who are lost in their careers a highly personalised map forward.</p>
            
            <p>In this article, I have set out to take control of my career and to set higher goals to achieve a career I can be happy in and proud of, and using this table I feel I have carved a new way forward. I hope that I can make this easy for other people to try it too.</p>
          `,
        },
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("08/07/2021 15:00"),
  }),
  new Article({
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
        data: {
          html: `
          <p>We could do a console.log for textureDetail, cross our fingers and hope it&rsquo;s just a string. We boot up the project and run it, pull down a copy of the data and log out our variable, and soon enough our terminal prints an object with eight key-value pairs! Yes! We can now confidently build our feature.</p>
  
          <p>But wait. What if this is a specific case where this object is missing a type property, which the hack-happy developer taped together to conditionally turn the whole textureDetail into a 3D model? Now all of the 3D models are broken, our clients are disappointed and all we can do is blame the previous coder.</p>
          
          <p>What would it take for us to avoid this and be able to confidently make changes that are required of us? Perhaps we can take advantage of typescript. Installing typescript into the project will still run our javascript files, so we can roll out typing into the project and slowly tame the jungle. Slack once made this change and discovered many type errors that were never picked up, how many might you find in your projects? [https://slack.engineering/typescript-at-slack/].</p>
          
          <p>With typescript we can now use our programming skills to infer what kind of data we are dealing with and save our team mates the trouble. Not to mention the intellisense that comes with typescript saves us extra time spent checking the documentation for our modules. It may seem like a lot of learning at first, and extra work that needs to be done.</p>
          
          <p>The only reason I can currently see not to use typescript is when you have not learned enough to write it fluently and are pressed for a deadline on a project that may only have a year lifespan. Even if your project is simple, at least typescript reassures other developers of its simplicity.</p>
          `,
        },
      },
    ],
    author: "Matthew Martin",
    draft: true,
    publishedDate: new Date("07/03/2021 09:00"),
  }),
];

export default articles;
