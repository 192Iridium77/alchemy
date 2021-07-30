import Article from "./model";

const articles = [
  new Article({
    title: "Technological Drive",
    description:
      "How did you feel when you first started programming? People I have asked have shared their experience as awe at the potential that opens up and dopamine rush of excitement to discover more.",
    image: {
      filename: "microcontrollers",
      extension: "jpg",
      alt: "Arduino and Raspberry Pi Microcontrollers",
    },
    components: [
      {
        type: "paragraph",
        data: {
          text: "I found the possibilities exhilarating, I was playing around with Arduinos and a Raspberry Pi 3B and I the whole world opened up. I wanted to take control of everything around me, to make the heater turn on in the morning, to make a farm that automatically grew produce and to build solar panels to power my microcontrollers and light up my room and power the fan in the summer.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "I wanted to do this every day so I spruced up my resume and applied for developer jobs and was eventually hired at a start up agency called Svelte Studios. On the back of the fumes of this passion I often stayed in the office and would often get home at 11pm at night. Not once though did I really think carefully about what I was doing. I think it is often the case for programmers, without much of a real plan we follow the scent of excitement wherever it takes us and rarely stop to think about what we are aiming for.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Last month I discovered a book called The Passionate Programmer by Chad Fowler. In this book Chad asks us to look at are careers like investments into a company. You would never invest your money in a company without really researching first. You might even consider re-evaluating your investment every quarter or so depending on the kind of investment you are making. Inspired by this, I gave my own career pathway some love and care, and in doing so I can aim for higher and harder goals. This act of aiming higher as the Author of The Art of Impossible suggests when implemented correctly enhances your motivation by 11-25%.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Finding where to aim your career can be challenging however. What if nobody will pay you to do what you love to do? What if you hate doing what people would pay you big money for? Perhaps you aren’t aware what pathways are available. What we really want is to find the cross section where we are maximally interested in a field or topic, while still catering to the market. To achieve this, I decided I would set out with a simple spread sheet like so:",
        },
      },
      { type: "table", data: {} },
      {
        type: "paragraph",
        data: {
          text: "Your list could be very different from this one depending on your options, awareness and interests. I found career options for software development by searching online and using similar career suggestions on common salary websites. If there are some missing, it’s either because I have no interest in that area or am not aware of it yet. The interest level I determined using a scale suggested by the book “The art of the Impossible”, you can gauge your interest based on whether you would spend an entire weekend studying or working on this topic, getting in touch with specialists or reading books on the topic. The market value I determined using average salaries for Australia, this could look very different for you based on just location, but you could also take into account the number of job postings available for the job.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "The key to this table is the Interest * Value column. Here I have presumed that having an interesting job and having a valuable job are equally weighted, and having both together multiplies the value because the two have highest synergy together. I term this the Career Investment Score, and after having sorted my career options by this value, I could more easily determine an optimal pathway forwards. Before making this chart, I was considering Embedded software and Web app development to be my best options, now I have a much broader picture.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "One of the challenges that this plot hasn’t overcome is the difficulty and investment requirements for particular career options. The glaring example being that software architecture requires years of experience in general software development, but regardless it has given me a much needed high goal to aim for. I figure making an app that combines this chart with a skills tree could help give people who are lost in their careers a highly personalised map forward.",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "In this article, I have set out to take control of my career and to set higher goals to achieve a career I can be happy in and proud of, and using this table I feel I have carved a new way forward. I hope that I can make this easy for other people to try it too. ",
        },
      },
    ],
    author: "Matthew Martin",
    draft: false,
    publishedDate: new Date(),
  }),
];

export default articles;
