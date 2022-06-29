import imgWork from "./images/icon-work.svg";
import imgPlay from "./images/icon-play.svg";
import imgStudy from "./images/icon-study.svg";
import imgExercise from "./images/icon-exercise.svg";
import imgSocial from "./images/icon-social.svg";
import imgSelf from "./images/icon-self-care.svg";

let Data = [
  {
    "title": "Work",
    "img": imgWork,
    "bgc": "hsl(15, 100%, 70%)",
    "timeframes": {
      "daily": {
        "current": "5hrs",
        "previous": "Last day - 7 hrs"
      },
      "weekly": {
        "current": "32hrs",
        "previous": "Last week - 36 hrs"
      },
      "monthly": {
        "current": "103hrs",
        "previous": "Last month - 128 hrs"
      }
    }
  },
  {
    "title": "Play",
    "img": imgPlay,
    "bgc": "hsl(195, 74%, 62%)",
    "timeframes": {
      "daily": {
        "current": "1hrs",
        "previous": "Yesterday - 2"
      },
      "weekly": {
        "current": "10hrs",
        "previous": "Last week - 8hrs"
      },
      "monthly": {
        "current": "23hrs",
        "previous": "Last month - 29hrs"
      }
    }
  },
  {
    "title": "Study",
    "img": imgStudy,
    "bgc": "hsl(348, 100%, 68%)",
    "timeframes": {
      "daily": {
        "current": "0hrs",
        "previous": "Yesterday - 1hrs"
      },
      "weekly": {
        "current": "4hrs",
        "previous": "Last week - 7hrs"
      },
      "monthly": {
        "current": "13hrs",
        "previous": "Last month - 19hrs"
      }
    }
  },
  {
    "title": "Exercise",
    "img": imgExercise,
    "bgc": "hsl(145, 58%, 55%)",
    "timeframes": {
      "daily": {
        "current": "1hrs",
        "previous": "Yesterday - 1hrs"
      },
      "weekly": {
        "current": "4hrs",
        "previous": "Last week - 5hrs"
      },
      "monthly": {
        "current": "11hrs",
        "previous": "Last month - 18hrs"
      }
    }
  },
  {
    "title": "Social",
    "img": imgSocial,
    "bgc": "hsl(264, 64%, 52%)",
    "timeframes": {
      "daily": {
        "current": "1hrs",
        "previous": "Yesterday - 3hrs"
      },
      "weekly": {
        "current": "5hrs",
        "previous": "Last week - 10hrs"
      },
      "monthly": {
        "current": "21hrs",
        "previous": "Last month - 23hrs"
      }
    }
  },
  {
    "title": "Self Care",
    "img": imgSelf,
    "bgc": "hsl(43, 84%, 65%)",
    "timeframes": {
      "daily": {
        "current": "0hrs",
        "previous": "Yesterday - 1hrs"
      },
      "weekly": {
        "current": "2hrs",
        "previous": "Last week - 2hrs"
      },
      "monthly": {
        "current": "7hrs",
        "previous": "Last week - 11hrs"
      }
    }
  }
]

export default Data