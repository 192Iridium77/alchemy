import Article from "./model";

const articles = [
  new Article({
    title: "Career Investment Score",
    description:
      "We are very fortunate to be in the business of software development. This vocation grants us a chance at a potentially lifelong craft, it can even be exciting and stimulating. I think many of us get into software development on the fumes of this kind of excitement, without all that much planning. Later down the track in our careers, we may feel a little aimless. The excitement that we’ve been lead by has become harder to find, it’s now all about management of products and people. If this is the case, then we have likely unknowingly let the outside world determine what career we’re going to have! Why would we give this choice to anyone else? Our career is a serious investment, and if we want to maximise our freedom, creativity and impact, we’re not going to get there without a plan. ",
    image: {
      filename: "passion",
      extension: "jpg",
      alt: "Passion Led Us Here",
    },
    components: [
      {
        type: "paragraph",
        data: {
          text: "It is important to re-evaluate your career often, otherwise you may find yourself suddenly working on expired technologies or even outsourced. What do you want your career to look like? What do you want to invest yourself into? Only when you have a clear answer to these questions can you really outdo yourself, no matter what the career. In order to determine your own future and do things people think are impossible, you need to have well defined goals that are high and hard. ",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "Finding a direction for your career can be very difficult though. What if nobody will pay you to do what you love to do? What if you hate doing what people would pay you big money for? Perhaps you aren’t aware what pathways are available. What we really want is to find the cross section where we are maximally interested in a field or topic, while still catering to the market. ",
        },
      },
      {
        type: "paragraph",
        data: {
          text: "To achieve this, I decided I would set out with a simple spread sheet like this:",
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
