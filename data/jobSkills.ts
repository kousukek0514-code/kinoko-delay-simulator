export type JobSkill = {
  id: string;
  jobId: string;
  name: string;
  cooldown: number;
  useTime: number;
  color: string;
  startTime: number;
  duration: number;
};

export const jobSkills: JobSkill[] = [
{
  id: "shizen",
  jobId: "yashin",
  name: "自然摂理",
  cooldown: 15,
  useTime: 1.25,
  color: "bg-orange-500",
  startTime: 0,
  duration: 5
},
  {
    id: "aohane",
    jobId: "haou",
    name: "青羽逐日",
    cooldown: 25,
    useTime: 1.25,
    color: "bg-orange-500",
    startTime: 0,
    duration:8
  },
];