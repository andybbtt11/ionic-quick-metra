// FORKED FROM https://github.com/pushchris/metra
var lineData = {
    "name": "Union Pacific West",
    "schedule": "upw.pdf",
    "stations": [
      { "name": "Elburn" },
      { "name": "La Fox" },
      { "name": "Geneva" },
      { "name": "West Chicago" },
      { "name": "Winfield" },
      { "name": "Wheaton" },
      { "name": "College Avenue" },
      { "name": "Glen Ellyn" },
      { "name": "Lombard" },
      { "name": "Villa Park" },
      { "name": "Elmhurst" },
      { "name": "Berkeley" },
      { "name": "Bellwood" },
      { "name": "Melrose Park" },
      { "name": "Maywood" },
      { "name": "River Forest" },
      { "name": "Oak Park" },
      { "name": "Kedzie" },
      { "name": "Ogilvie" }
    ],
    "lines": [
      {
        "direction": "Inbound",
        "name": "10",
        "stops": [
          { "time": "4:48am" },
          { "time": "4:52am" },
          { "time": "5:00am" },
          { "time": "5:08am" },
          { "time": "5:12am" },
          { "time": "5:16am" },
          { "time": "5:19am" },
          { "time": "5:22am" },
          { "time": "5:26am" },
          { "time": "5:30am" },
          { "time": "5:34am" },
          { "time": "5:37am" },
          { "time": "5:40am" },
          { "time": "5:43am" },
          { "time": "5:45am" },
          { "time": "5:47am" },
          { "time": "5:51am" },
          { "time": "5:58am" },
          { "time": "6:10am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "12",
        "status": "cut",
        "stops": [
          { "time": "" },
          { "time": "" },
          { "time": "5:22am" },
          { "time": "5:30am" },
          { "time": "5:34am" },
          { "time": "5:38am" },
          { "time": "5:41am" },
          { "time": "5:44am" },
          { "time": "5:48am" },
          { "time": "5:52am" },
          { "time": "5:56am" },
          { "time": "5:59am" },
          { "time": "6:02am" },
          { "time": "6:05am" },
          { "time": "" },
          { "time": "6:08am" },
          { "time": "6:12am" },
          { "time": "" },
          { "time": "6:28am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "14",
        "stops": [
          { "time": "5:26am" },
          { "time": "5:30am" },
          { "time": "5:39am" },
          { "time": "5:48am" },
          { "time": "5:52am" },
          { "time": "5:57am" },
          { "time": "6:00am" },
          { "time": "6:03am" },
          { "time": "6:07am" },
          { "time": "6:11am" },
          { "time": "6:15am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:24am" },
          { "time": "6:27am" },
          { "time": "" },
          { "time": "6:44am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "16",
        "stops": [
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:03am" },
          { "time": "" },
          { "time": "6:11am" },
          { "time": "" },
          { "time": "6:16am" },
          { "time": "" },
          { "time": "" },
          { "time": "6:26am" },
          { "time": "6:29am" },
          { "time": "6:32am" },
          { "time": "6:35am" },
          { "time": "6:37am" },
          { "time": "6:40am" },
          { "time": "6:44am" },
          { "time": "6:51am" },
          { "time": "7:02am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "18",
        "stops": [
          { "time": "5:51am" },
          { "time": "5:55am" },
          { "time": "6:04am" },
          { "time": "6:13am" },
          { "time": "6:17am" },
          { "time": "6:22am" },
          { "time": "6:25am" },
          { "time": "6:29am" },
          { "time": "6:34am" },
          { "time": "6:38am" },
          { "time": "6:42am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:53am" },
          { "time": "" },
          { "time": "7:11am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "20",
        "stops": [
          { "time": "" },
          { "time": "" },
          { "time": "6:13am" },
          { "time": "6:22am" },
          { "time": "6:26am" },
          { "time": "6:31am" },
          { "time": "6:34am" },
          { "time": "6:38am" },
          { "time": "6:43am" },
          { "time": "6:48am" },
          { "time": "6:52am" },
          { "time": "6:55am" },
          { "time": "6:58am" },
          { "time": "7:02am" },
          { "time": "7:04am" },
          { "time": "7:07am" },
          { "time": "7:11am" },
          { "time": "7:19am" },
          { "time": "7:31am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "22",
        "stops": [
          { "time": "6:21am" },
          { "time": "6:26am" },
          { "time": "6:36am" },
          { "time": "6:46am" },
          { "time": "" },
          { "time": "6:53am" },
          { "time": "" },
          { "time": "6:59am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "7:15am" },
          { "time": "" },
          { "time": "" },
          { "time": "7:35am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "24",
        "stops": [
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:52am" },
          { "time": "6:57am" },
          { "time": "" },
          { "time": "7:03am" },
          { "time": "" },
          { "time": "7:10am" },
          { "time": "7:15am" },
          { "time": "7:20am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "7:31am" },
          { "time": "" },
          { "time": "7:49am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "26",
        "status": "original",
        "stops": [
          { "time": "6:41am" },
          { "time": "6:46am" },
          { "time": "6:54am" },
          { "time": "" },
          { "time": "" },
          { "time": "7:10am" },
          { "time": "7:13am" },
          { "time": "7:17am" },
          { "time": "7:22am" },
          { "time": "" },
          { "time": "7:28am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "7:55am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "26",
        "status": "adjusted",
        "stops": [
          { "time": "6:41am" },
          { "time": "6:46am" },
          { "time": "6:54am" },
          { "time": "" },
          { "time": "" },
          { "time": "7:10am" },
          { "time": "7:13am" },
          { "time": "7:17am" },
          { "time": "7:22am" },
          { "time": "" },
          { "time": "7:28am" },
          { "status": "adjusted", "time": "7:32am" },
          { "status": "adjusted", "time": "7:35am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "status": "adjusted", "time": "7:58am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "28",
        "status": "cut",
        "stops": [
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "7:32am" },
          { "time": "7:36am" },
          { "time": "7:39am" },
          { "time": "7:42am" },
          { "time": "7:45am" },
          { "time": "7:47am" },
          { "time": "7:51am" },
          { "time": "" },
          { "time": "8:07am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "30",
        "status": "original",
        "stops": [
          { "time": "" },
          { "time": "7:01am" },
          { "time": "7:10am" },
          { "time": "7:19am" },
          { "time": "7:23am" },
          { "time": "7:28am" },
          { "time": "7:31am" },
          { "time": "7:34am" },
          { "time": "7:40am" },
          { "time": "7:44am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "7:55am" },
          { "time": "7:59am" },
          { "time": "" },
          { "time": "8:15am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "30",
        "status": "adjusted",
        "stops": [
          { "time": "" },
          { "time": "7:01am" },
          { "time": "7:10am" },
          { "time": "7:19am" },
          { "time": "7:23am" },
          { "time": "7:28am" },
          { "time": "7:31am" },
          { "time": "7:34am" },
          { "time": "7:40am" },
          { "time": "7:44am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "status": "adjusted", "time": "7:53am" },
          { "status": "adjusted", "time": "7:56am" },
          { "status": "adjusted", "time": "7:58am" },
          { "status": "adjusted", "time": "8:02am" },
          { "time": "" },
          { "status": "adjusted", "time": "8:18am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "32",
        "stops": [
          { "time": "7:11am" },
          { "time": "7:16am" },
          { "time": "7:25am" },
          { "time": "7:34am" },
          { "time": "" },
          { "time": "7:42am" },
          { "time": "" },
          { "time": "7:47am" },
          { "time": "" },
          { "time": "" },
          { "time": "7:57am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "8:23am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "34",
        "stops": [
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "8:01am" },
          { "time": "8:05am" },
          { "time": "8:08am" },
          { "time": "8:11am" },
          { "time": "8:14am" },
          { "time": "8:16am" },
          { "time": "8:20am" },
          { "time": "8:27am" },
          { "time": "8:37am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "36",
        "stops": [
          { "time": "7:35am" },
          { "time": "7:40am" },
          { "time": "7:49am" },
          { "time": "7:57am" },
          { "time": "8:01am" },
          { "time": "8:06am" },
          { "time": "8:09am" },
          { "time": "8:13am" },
          { "time": "8:18am" },
          { "time": "8:22am" },
          { "time": "8:27am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "8:53am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "38",
        "stops": [
          { "time": "8:05am" },
          { "time": "8:09am" },
          { "time": "8:17am" },
          { "time": "8:25am" },
          { "time": "8:29am" },
          { "time": "8:34am" },
          { "time": "8:37am" },
          { "time": "8:41am" },
          { "time": "8:45am" },
          { "time": "8:49am" },
          { "time": "8:53am" },
          { "time": "8:56am" },
          { "time": "8:59am" },
          { "time": "9:02am" },
          { "time": "9:04am" },
          { "time": "9:06am" },
          { "time": "9:09am" },
          { "time": "9:17am" },
          { "time": "9:28am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "42",
        "stops": [
          { "time": "9:25am" },
          { "time": "9:29am" },
          { "time": "9:37am" },
          { "time": "9:45am" },
          { "time": "9:49am" },
          { "time": "9:54am" },
          { "time": "9:57am" },
          { "time": "10:00am" },
          { "time": "10:04am" },
          { "time": "10:08am" },
          { "time": "10:13am" },
          { "time": "10:16am" },
          { "time": "10:19am" },
          { "time": "10:22am" },
          { "time": "" },
          { "time": "10:25am" },
          { "time": "10:28am" },
          { "time": "10:36am" },
          { "time": "10:47am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "44",
        "stops": [
          { "time": "10:25am" },
          { "time": "10:29am" },
          { "time": "10:37am" },
          { "time": "10:45am" },
          { "time": "10:49am" },
          { "time": "10:54am" },
          { "time": "10:57am" },
          { "time": "11:00am" },
          { "time": "11:04am" },
          { "time": "11:08am" },
          { "time": "11:13am" },
          { "time": "11:16am" },
          { "time": "11:19am" },
          { "time": "" },
          { "time": "11:23am" },
          { "time": "11:25am" },
          { "time": "11:28am" },
          { "time": "11:36am" },
          { "time": "11:47am" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "48",
        "stops": [
          { "time": "12:25pm" },
          { "time": "12:29pm" },
          { "time": "12:37pm" },
          { "time": "12:45pm" },
          { "time": "12:49pm" },
          { "time": "12:54pm" },
          { "time": "12:57pm" },
          { "time": "1:00pm" },
          { "time": "1:04pm" },
          { "time": "1:08pm" },
          { "time": "1:13pm" },
          { "time": "1:16pm" },
          { "time": "1:19pm" },
          { "time": "1:22pm" },
          { "time": "" },
          { "time": "1:25pm" },
          { "time": "1:28pm" },
          { "time": "" },
          { "time": "1:47pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "50",
        "stops": [
          { "time": "1:25pm" },
          { "time": "1:29pm" },
          { "time": "1:37pm" },
          { "time": "1:45pm" },
          { "time": "1:49pm" },
          { "time": "1:54pm" },
          { "time": "1:57pm" },
          { "time": "2:00pm" },
          { "time": "2:04pm" },
          { "time": "2:08pm" },
          { "time": "2:13pm" },
          { "time": "2:16pm" },
          { "time": "2:19pm" },
          { "time": "" },
          { "time": "2:23pm" },
          { "time": "2:25pm" },
          { "time": "2:28pm" },
          { "time": "2:36pm" },
          { "time": "2:47pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "52",
        "stops": [
          { "time": "2:25pm" },
          { "time": "2:29pm" },
          { "time": "2:37pm" },
          { "time": "2:45pm" },
          { "time": "2:49pm" },
          { "time": "2:54pm" },
          { "time": "2:57pm" },
          { "time": "3:00pm" },
          { "time": "3:04pm" },
          { "time": "3:08pm" },
          { "time": "3:13pm" },
          { "time": "3:16pm" },
          { "time": "3:19pm" },
          { "time": "3:22pm" },
          { "time": "" },
          { "time": "3:25pm" },
          { "time": "3:28pm" },
          { "time": "" },
          { "time": "3:47pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "54",
        "stops": [
          { "time": "3:25pm" },
          { "time": "3:29pm" },
          { "time": "3:37pm" },
          { "time": "3:45pm" },
          { "time": "3:49pm" },
          { "time": "3:54pm" },
          { "time": "3:57pm" },
          { "time": "4:00pm" },
          { "time": "4:04pm" },
          { "time": "4:08pm" },
          { "time": "4:13pm" },
          { "time": "4:16pm" },
          { "time": "4:19pm" },
          { "time": "" },
          { "time": "4:23pm" },
          { "time": "4:25pm" },
          { "time": "4:28pm" },
          { "time": "4:36pm" },
          { "time": "4:47pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "56",
        "stops": [
          { "time": "4:25pm" },
          { "time": "4:29pm" },
          { "time": "4:37pm" },
          { "time": "4:45pm" },
          { "time": "4:49pm" },
          { "time": "4:54pm" },
          { "time": "4:57pm" },
          { "time": "5:00pm" },
          { "time": "5:04pm" },
          { "time": "5:08pm" },
          { "time": "5:13pm" },
          { "time": "5:16pm" },
          { "time": "5:19pm" },
          { "time": "5:22pm" },
          { "time": "5:24pm" },
          { "time": "5:26pm" },
          { "time": "5:29pm" },
          { "time": "5:38pm" },
          { "time": "5:49pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "58",
        "stops": [
          { "time": "5:25pm" },
          { "time": "5:29pm" },
          { "time": "5:37pm" },
          { "time": "5:45pm" },
          { "time": "5:49pm" },
          { "time": "5:54pm" },
          { "time": "5:57pm" },
          { "time": "6:00pm" },
          { "time": "6:04pm" },
          { "time": "6:08pm" },
          { "time": "6:13pm" },
          { "time": "6:16pm" },
          { "time": "6:19pm" },
          { "time": "6:22pm" },
          { "time": "6:24pm" },
          { "time": "6:26pm" },
          { "time": "6:29pm" },
          { "time": "6:38pm" },
          { "time": "6:49pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "60",
        "stops": [
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:28pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:38pm" },
          { "time": "" },
          { "time": "6:54pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "62",
        "stops": [
          { "time": "6:25pm" },
          { "time": "6:29pm" },
          { "time": "6:37pm" },
          { "time": "6:45pm" },
          { "time": "6:49pm" },
          { "time": "6:54pm" },
          { "time": "6:57pm" },
          { "time": "7:00pm" },
          { "time": "7:04pm" },
          { "time": "7:08pm" },
          { "time": "7:13pm" },
          { "time": "" },
          { "time": "7:18pm" },
          { "time": "7:21pm" },
          { "time": "" },
          { "time": "7:24pm" },
          { "time": "7:28pm" },
          { "time": "" },
          { "time": "7:46pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "64",
        "stops": [
          { "time": "7:25pm" },
          { "time": "7:29pm" },
          { "time": "7:37pm" },
          { "time": "7:45pm" },
          { "time": "7:49pm" },
          { "time": "7:54pm" },
          { "time": "7:57pm" },
          { "time": "8:00pm" },
          { "time": "8:04pm" },
          { "time": "8:08pm" },
          { "time": "8:13pm" },
          { "time": "8:16pm" },
          { "time": "" },
          { "time": "" },
          { "time": "8:22pm" },
          { "time": "8:24pm" },
          { "time": "8:28pm" },
          { "time": "" },
          { "time": "8:46pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "66",
        "stops": [
          { "time": "8:25pm" },
          { "time": "8:29pm" },
          { "time": "8:37pm" },
          { "time": "8:45pm" },
          { "time": "8:49pm" },
          { "time": "8:54pm" },
          { "time": "8:57pm" },
          { "time": "9:00pm" },
          { "time": "9:04pm" },
          { "time": "9:08pm" },
          { "time": "9:13pm" },
          { "time": "9:16pm" },
          { "time": "9:19pm" },
          { "time": "9:22pm" },
          { "time": "" },
          { "time": "9:25pm" },
          { "time": "9:28pm" },
          { "time": "" },
          { "time": "9:46pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "68",
        "stops": [
          { "time": "9:25pm" },
          { "time": "9:29pm" },
          { "time": "9:37pm" },
          { "time": "9:45pm" },
          { "time": "9:49pm" },
          { "time": "9:54pm" },
          { "time": "9:57pm" },
          { "time": "10:00pm" },
          { "time": "10:04pm" },
          { "time": "10:08pm" },
          { "time": "10:13pm" },
          { "time": "10:16pm" },
          { "time": "" },
          { "time": "" },
          { "time": "10:22pm" },
          { "time": "10:24pm" },
          { "time": "10:28pm" },
          { "time": "" },
          { "time": "10:46pm" }
        ]
      },
      {
        "direction": "Inbound",
        "name": "70",
        "stops": [
          { "time": "10:25pm" },
          { "time": "10:29pm" },
          { "time": "10:37pm" },
          { "time": "10:45pm" },
          { "time": "10:49pm" },
          { "time": "10:54pm" },
          { "time": "10:57pm" },
          { "time": "11:00pm" },
          { "time": "11:04pm" },
          { "time": "11:08pm" },
          { "time": "11:13pm" },
          { "time": "" },
          { "time": "11:18pm" },
          { "time": "11:21pm" },
          { "time": "" },
          { "time": "11:24pm" },
          { "time": "11:28pm" },
          { "time": "" },
          { "time": "11:46pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "13",
        "stops": [
          { "time": "5:53am" },
          { "time": "6:02am" },
          { "time": "6:09am" },
          { "time": "6:11am" },
          { "time": "6:13am" },
          { "time": "6:16am" },
          { "time": "6:19am" },
          { "time": "6:22am" },
          { "time": "6:25am" },
          { "time": "6:30am" },
          { "time": "6:34am" },
          { "time": "6:38am" },
          { "time": "6:41am" },
          { "time": "6:45am" },
          { "time": "6:49am" },
          { "time": "6:53am" },
          { "time": "7:03am" },
          { "time": "7:11am" },
          { "time": "7:21am" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "15",
        "stops": [
          { "time": "6:32am" },
          { "time": "6:41am" },
          { "time": "6:47am" },
          { "time": "6:50am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:58am" },
          { "time": "7:02am" },
          { "time": "7:06am" },
          { "time": "7:10am" },
          { "time": "7:13am" },
          { "time": "7:16am" },
          { "time": "7:20am" },
          { "time": "7:24am" },
          { "time": "7:32am" },
          { "time": "7:40am" },
          { "time": "7:50am" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "17",
        "status": "cut",
        "stops": [
          { "time": "6:57am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "7:22am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "19",
        "stops": [
          { "time": "7:15am" },
          { "time": "7:24am" },
          { "time": "7:32am" },
          { "time": "7:35am" },
          { "time": "7:38am" },
          { "time": "7:40am" },
          { "time": "7:43am" },
          { "time": "7:46am" },
          { "time": "7:50am" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "21",
        "stops": [
          { "time": "7:40am" },
          { "time": "" },
          { "time": "7:55am" },
          { "time": "7:57am" },
          { "time": "7:59am" },
          { "time": "8:01am" },
          { "time": "8:04am" },
          { "time": "8:07am" },
          { "time": "8:11am" },
          { "time": "8:15am" },
          { "time": "8:19am" },
          { "time": "8:23am" },
          { "time": "8:26am" },
          { "time": "8:29am" },
          { "time": "8:33am" },
          { "time": "8:37am" },
          { "time": "8:45am" },
          { "time": "8:54am" },
          { "time": "9:04am" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "25",
        "stops": [
          { "time": "8:40am" },
          { "time": "8:49am" },
          { "time": "8:56am" },
          { "time": "8:58am" },
          { "time": "9:01am" },
          { "time": "9:03am" },
          { "time": "9:06am" },
          { "time": "9:09am" },
          { "time": "9:14am" },
          { "time": "9:18am" },
          { "time": "9:22am" },
          { "time": "9:27am" },
          { "time": "9:30am" },
          { "time": "9:33am" },
          { "time": "9:37am" },
          { "time": "9:41am" },
          { "time": "9:50am" },
          { "time": "9:58am" },
          { "time": "10:08am" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "29",
        "status": "original",
        "stops": [
          { "time": "10:40am" },
          { "time": "" },
          { "time": "10:56am" },
          { "time": "10:58am" },
          { "time": "" },
          { "time": "11:02am" },
          { "time": "11:05am" },
          { "time": "11:08am" },
          { "time": "11:12am" },
          { "time": "11:16am" },
          { "time": "11:20am" },
          { "time": "11:25am" },
          { "time": "11:28am" },
          { "time": "11:31am" },
          { "time": "11:35am" },
          { "time": "11:39am" },
          { "time": "11:47am" },
          { "time": "11:56am" },
          { "time": "12:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "29",
        "status": "adjusted",
        "stops": [
          { "status": "adjusted", "time": "9:40am" },
          { "time": "" },
          { "status": "adjusted", "time": "9:56am" },
          { "status": "adjusted", "time": "9:58am" },
          { "time": "" },
          { "status": "adjusted", "time": "10:02am" },
          { "status": "adjusted", "time": "10:05am" },
          { "status": "adjusted", "time": "10:08am" },
          { "status": "adjusted", "time": "10:12am" },
          { "status": "adjusted", "time": "10:16am" },
          { "status": "adjusted", "time": "10:20am" },
          { "status": "adjusted", "time": "10:25am" },
          { "status": "adjusted", "time": "10:28am" },
          { "status": "adjusted", "time": "10:31am" },
          { "status": "adjusted", "time": "10:35am" },
          { "status": "adjusted", "time": "10:39am" },
          { "status": "adjusted", "time": "10:47am" },
          { "status": "adjusted", "time": "10:56am" },
          { "status": "adjusted", "time": "11:06am" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "31",
        "stops": [
          { "time": "11:40am" },
          { "time": "11:49am" },
          { "time": "11:56am" },
          { "time": "11:58am" },
          { "time": "12:01pm" },
          { "time": "" },
          { "time": "12:05pm" },
          { "time": "12:08pm" },
          { "time": "12:12pm" },
          { "time": "12:16pm" },
          { "time": "12:20pm" },
          { "time": "12:25pm" },
          { "time": "12:28pm" },
          { "time": "12:31pm" },
          { "time": "12:35pm" },
          { "time": "12:39pm" },
          { "time": "12:47pm" },
          { "time": "12:56pm" },
          { "time": "1:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "33",
        "stops": [
          { "time": "12:40pm" },
          { "time": "" },
          { "time": "12:56pm" },
          { "time": "12:58pm" },
          { "time": "" },
          { "time": "1:02pm" },
          { "time": "1:05pm" },
          { "time": "1:08pm" },
          { "time": "1:12pm" },
          { "time": "1:16pm" },
          { "time": "1:20pm" },
          { "time": "1:25pm" },
          { "time": "1:28pm" },
          { "time": "1:31pm" },
          { "time": "1:35pm" },
          { "time": "1:39pm" },
          { "time": "1:47pm" },
          { "time": "1:56pm" },
          { "time": "2:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "35",
        "stops": [
          { "time": "1:40pm" },
          { "time": "1:49pm" },
          { "time": "1:56pm" },
          { "time": "1:58pm" },
          { "time": "2:01pm" },
          { "time": "" },
          { "time": "2:05pm" },
          { "time": "2:08pm" },
          { "time": "2:12pm" },
          { "time": "2:16pm" },
          { "time": "2:20pm" },
          { "time": "2:25pm" },
          { "time": "2:28pm" },
          { "time": "2:31pm" },
          { "time": "2:35pm" },
          { "time": "2:39pm" },
          { "time": "2:47pm" },
          { "time": "2:56pm" },
          { "time": "3:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "37",
        "stops": [
          { "time": "2:40pm" },
          { "time": "" },
          { "time": "2:56pm" },
          { "time": "2:58pm" },
          { "time": "" },
          { "time": "3:03pm" },
          { "time": "3:06pm" },
          { "time": "3:09pm" },
          { "time": "3:14pm" },
          { "time": "3:18pm" },
          { "time": "3:22pm" },
          { "time": "3:27pm" },
          { "time": "3:30pm" },
          { "time": "3:33pm" },
          { "time": "3:38pm" },
          { "time": "3:43pm" },
          { "time": "3:52pm" },
          { "time": "4:00pm" },
          { "time": "4:11pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "39",
        "stops": [
          { "time": "3:40pm" },
          { "time": "" },
          { "time": "3:56pm" },
          { "time": "3:58pm" },
          { "time": "4:01pm" },
          { "time": "4:03pm" },
          { "time": "4:06pm" },
          { "time": "4:09pm" },
          { "time": "4:14pm" },
          { "time": "4:18pm" },
          { "time": "4:22pm" },
          { "time": "4:27pm" },
          { "time": "4:30pm" },
          { "time": "4:33pm" },
          { "time": "4:38pm" },
          { "time": "4:43pm" },
          { "time": "4:52pm" },
          { "time": "5:00pm" },
          { "time": "5:11pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "41",
        "stops": [
          { "time": "4:11pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "4:35pm" },
          { "time": "4:39pm" },
          { "time": "4:44pm" },
          { "time": "4:49pm" },
          { "time": "4:53pm" },
          { "time": "4:57pm" },
          { "time": "5:01pm" },
          { "time": "5:06pm" },
          { "time": "5:16pm" },
          { "time": "5:25pm" },
          { "time": "5:35pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "43",
        "stops": [
          { "time": "4:17pm" },
          { "time": "" },
          { "time": "4:33pm" },
          { "time": "4:36pm" },
          { "time": "4:39pm" },
          { "time": "4:41pm" },
          { "time": "4:44pm" },
          { "time": "4:47pm" },
          { "time": "4:51pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "45",
        "stops": [
          { "time": "4:35pm" },
          { "time": "4:44pm" },
          { "time": "4:52pm" },
          { "time": "4:55pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "5:05pm" },
          { "time": "5:09pm" },
          { "time": "5:14pm" },
          { "time": "5:19pm" },
          { "time": "5:23pm" },
          { "time": "5:27pm" },
          { "time": "5:32pm" },
          { "time": "5:37pm" },
          { "time": "5:47pm" },
          { "time": "" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "47",
        "stops": [
          { "time": "5:04pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "5:38pm" },
          { "time": "5:43pm" },
          { "time": "" },
          { "time": "5:57pm" },
          { "time": "" },
          { "time": "6:14pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "49",
        "stops": [
          { "time": "5:09pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "5:38pm" },
          { "time": "5:43pm" },
          { "time": "5:47pm" },
          { "time": "" },
          { "time": "" },
          { "time": "5:55pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "51",
        "stops": [
          { "time": "5:13pm" },
          { "time": "" },
          { "time": "5:29pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "5:39pm" },
          { "time": "5:44pm" },
          { "time": "" },
          { "time": "5:53pm" },
          { "time": "" },
          { "time": "5:58pm" },
          { "time": "" },
          { "time": "6:05pm" },
          { "time": "" },
          { "time": "6:25pm" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "53",
        "stops": [
          { "time": "5:19pm" },
          { "time": "5:28pm" },
          { "time": "5:35pm" },
          { "time": "5:38pm" },
          { "time": "5:40pm" },
          { "time": "5:42pm" },
          { "time": "5:46pm" },
          { "time": "5:49pm" },
          { "time": "5:53pm" },
          { "time": "" },
          { "time": "5:59pm" },
          { "time": "" },
          { "time": "6:05pm" },
          { "time": "" },
          { "time": "6:12pm" },
          { "time": "" },
          { "time": "6:25pm" },
          { "time": "6:35pm" },
          { "time": "6:45pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "55",
        "stops": [
          { "time": "5:34pm" },
          { "time": "" },
          { "time": "5:50pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:00pm" },
          { "time": "" },
          { "time": "" },
          { "time": "6:10pm" },
          { "time": "" },
          { "time": "6:16pm" },
          { "time": "" },
          { "time": "6:24pm" },
          { "time": "6:35pm" },
          { "time": "" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "57",
        "stops": [
          { "time": "5:42pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:06pm" },
          { "time": "6:10pm" },
          { "time": "6:14pm" },
          { "time": "6:21pm" },
          { "time": "6:24pm" },
          { "time": "6:29pm" },
          { "time": "6:34pm" },
          { "time": "6:38pm" },
          { "time": "6:46pm" },
          { "time": "6:56pm" },
          { "time": "7:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "59",
        "stops": [
          { "time": "5:46pm" },
          { "time": "5:55pm" },
          { "time": "6:03pm" },
          { "time": "6:06pm" },
          { "time": "6:09pm" },
          { "time": "6:11pm" },
          { "time": "6:14pm" },
          { "time": "6:17pm" },
          { "time": "6:21pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "61",
        "stops": [
          { "time": "6:10pm" },
          { "time": "" },
          { "time": "6:26pm" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "" },
          { "time": "6:37pm" },
          { "time": "6:41pm" },
          { "time": "6:45pm" },
          { "time": "6:50pm" },
          { "time": "6:53pm" },
          { "time": "6:57pm" },
          { "time": "7:01pm" },
          { "time": "7:05pm" },
          { "time": "7:13pm" },
          { "time": "7:23pm" },
          { "time": "7:33pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "63",
        "stops": [
          { "time": "6:40pm" },
          { "time": "" },
          { "time": "6:56pm" },
          { "time": "6:58pm" },
          { "time": "7:01pm" },
          { "time": "7:03pm" },
          { "time": "7:06pm" },
          { "time": "7:09pm" },
          { "time": "7:12pm" },
          { "time": "7:16pm" },
          { "time": "7:20pm" },
          { "time": "7:25pm" },
          { "time": "7:28pm" },
          { "time": "7:31pm" },
          { "time": "7:35pm" },
          { "time": "7:39pm" },
          { "time": "7:47pm" },
          { "time": "7:56pm" },
          { "time": "8:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "65",
        "stops": [
          { "time": "7:40pm" },
          { "time": "" },
          { "time": "7:56pm" },
          { "time": "7:58pm" },
          { "time": "" },
          { "time": "8:02pm" },
          { "time": "8:05pm" },
          { "time": "8:08pm" },
          { "time": "8:12pm" },
          { "time": "8:16pm" },
          { "time": "8:20pm" },
          { "time": "8:25pm" },
          { "time": "8:28pm" },
          { "time": "8:31pm" },
          { "time": "8:35pm" },
          { "time": "8:39pm" },
          { "time": "8:47pm" },
          { "time": "8:56pm" },
          { "time": "9:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "67",
        "stops": [
          { "time": "8:40pm" },
          { "time": "" },
          { "time": "8:56pm" },
          { "time": "8:58pm" },
          { "time": "9:01pm" },
          { "time": "" },
          { "time": "9:05pm" },
          { "time": "9:08pm" },
          { "time": "9:12pm" },
          { "time": "9:16pm" },
          { "time": "9:20pm" },
          { "time": "9:25pm" },
          { "time": "9:28pm" },
          { "time": "9:31pm" },
          { "time": "9:35pm" },
          { "time": "9:39pm" },
          { "time": "9:47pm" },
          { "time": "9:56pm" },
          { "time": "10:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "69",
        "stops": [
          { "time": "9:40pm" },
          { "time": "" },
          { "time": "9:56pm" },
          { "time": "9:58pm" },
          { "time": "" },
          { "time": "10:02pm" },
          { "time": "10:05pm" },
          { "time": "10:08pm" },
          { "time": "10:12pm" },
          { "time": "10:16pm" },
          { "time": "10:20pm" },
          { "time": "10:25pm" },
          { "time": "10:28pm" },
          { "time": "10:31pm" },
          { "time": "10:35pm" },
          { "time": "10:39pm" },
          { "time": "10:47pm" },
          { "time": "10:56pm" },
          { "time": "11:06pm" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "71",
        "stops": [
          { "time": "10:40pm" },
          { "time": "" },
          { "time": "10:56pm" },
          { "time": "10:58pm" },
          { "time": "11:01pm" },
          { "time": "" },
          { "time": "11:05pm" },
          { "time": "11:08pm" },
          { "time": "11:12pm" },
          { "time": "11:16pm" },
          { "time": "11:20pm" },
          { "time": "11:25pm" },
          { "time": "11:28pm" },
          { "time": "11:31pm" },
          { "time": "11:35pm" },
          { "time": "11:39pm" },
          { "time": "11:47pm" },
          { "time": "11:56pm" },
          { "time": "12:06am" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "73",
        "stops": [
          { "time": "11:40pm" },
          { "time": "" },
          { "time": "11:56pm" },
          { "time": "11:58pm" },
          { "time": "" },
          { "time": "12:02am" },
          { "time": "12:05am" },
          { "time": "12:08am" },
          { "time": "12:12am" },
          { "time": "12:16am" },
          { "time": "12:20am" },
          { "time": "12:25am" },
          { "time": "12:28am" },
          { "time": "12:31am" },
          { "time": "12:35am" },
          { "time": "12:39am" },
          { "time": "12:47am" },
          { "time": "12:56am" },
          { "time": "1:06am" }
        ]
      },
      {
        "direction": "Outbound",
        "name": "11",
        "stops": [
          { "time": "12:40am" },
          { "time": "" },
          { "time": "12:56am" },
          { "time": "12:58am" },
          { "time": "1:01am" },
          { "time": "" },
          { "time": "1:05am" },
          { "time": "1:08am" },
          { "time": "1:12am" },
          { "time": "1:16am" },
          { "time": "1:20am" },
          { "time": "1:25am" },
          { "time": "1:28am" },
          { "time": "1:31am" },
          { "time": "1:35am" },
          { "time": "1:39am" },
          { "time": "1:47am" },
          { "time": "1:56am" },
          { "time": "2:06am" }
        ]
      }
    ]
  }
  
  var getLine = function(line) {
     return lineData;
  }
  
  var getNextTrain = function(line, start, destination) {
      
      var line = getLine(line),
          stations = line.stations,
          lines = line.lines;
      
      var startIndex,
          stopIndex;
            
      for (var i in stations) {
          if (stations[i].name == start) {
              startIndex = i;
          }
          if (stations[i].name == destination) {
              stopIndex = i;
          }
      }
      
      var direction = "Inbound";
  
      if (parseInt(startIndex) > parseInt(stopIndex)) {
          direction = "Outbound";
          startIndex = (stations.length-1) - startIndex;
          stopIndex = (stations.length-1) - stopIndex;
      }
      
      var currentTime = new Date();
      var train = {};
  
      train.departure = currentTime*2;
      train.arrival = currentTime*2;
      train.available = true;
      train.origin = start;
      train.destination = destination;
          
      for (var j in lines) {
          if (lines[j].direction == direction) {
              var time = lines[j].stops[startIndex].time;
              if (time != "") {
                  var parsedTime = parseTime(time);
                  if (parsedTime > currentTime && parsedTime < train.departure && lines[j].stops[stopIndex].time != "") {
                      train.departure = time;
                      if (lines[j].stops[stopIndex].time != "") {
                          train.arrival = lines[j].stops[stopIndex].time;
                          train.available = true;
                      } else {
                          train.arrival = "Does not stop at station";
                          train.available = false;
                      }
                      train.number = lines[j].name;
                  }
              }
          }
      }
      
      if (train.departure == currentTime*2) {
          return { "error": "No trains available today" };
      }
      
      return train;
  }
  
  var parseTime = function(timeStr, dt) {
      if (!dt) {
          dt = new Date();
      }
   
      var time = timeStr.match(/(\d+)(?::(\d\d))?\s*(p?)/i);
      if (!time) {
          return NaN;
      }
      var hours = parseInt(time[1], 10);
      if (hours == 12 && !time[3]) {
          hours = 0;
      }
      else {
          hours += (hours < 12 && time[3]) ? 12 : 0;
      }
   
      dt.setHours(hours);
      dt.setMinutes(parseInt(time[2], 10) || 0);
      dt.setSeconds(0, 0);
      return dt;
  }
  
  
  export default getNextTrain;