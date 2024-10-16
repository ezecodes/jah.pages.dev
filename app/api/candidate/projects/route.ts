export async function GET() {
  return Response.json({
    projects: [
      {
        title: "Clifbay",
        description: "One of Africa's fastest growing online marketplace.",
        image: "clifbay.png",
        link: "https://clifbay.com",
      },
      {
        title: "AWS Cloud IAC",
        description: "Simplifying cloud deployment process.",
        image:
          "https://miro.medium.com/v2/resize:fit:700/0*IF5Z05nkdvA3JDXI.png",
        link: "https://github.com/ezecodes/aws-services",
      },
    ],
  });
}
