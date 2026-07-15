"use client";

import React from "react";
import { jobs } from "@/data/jobs";
import { jobSkills } from "@/data/jobSkills";

type Props = {
  buildName: string;
  setBuildName: React.Dispatch<React.SetStateAction<string>>;

  selectedJob: string;
  setSelectedJob: React.Dispatch<React.SetStateAction<string>>;

  selectedJobSkill: any;

  jobSkillStartTime: number;
  setJobSkillStartTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function BuildForm({
  buildName,
  setBuildName,
  selectedJob,
  setSelectedJob,
  selectedJobSkill,
  jobSkillStartTime,
  setJobSkillStartTime,
}: Props) {
  return (
    <div className="space-y-6">
      {/* ビルド名 */}
      <div>
        <label className="block font-semibold mb-2">
          ビルド名
        </label>

        <input
          type="text"
          placeholder="例：PvP最強"
          value={buildName}
          onChange={(e) => setBuildName(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* 職業 */}
      <div>
        <label className="block font-semibold text-gray-800 dark:text-gray-200 mb-2">
          職業
        </label>

        <select
          value={selectedJob}
          onChange={(e) => setSelectedJob(e.target.value)}
          className="w-full rounded-lg border p-2"
        >
          {jobs.map((job) => (
            <option
              key={job.id}
              value={job.id}
            >
              {job.name}
            </option>
          ))}
        </select>
      </div>

      {/* 職業技能 */}
      <div>
        <label className="block font-semibold mb-2">
          職業技能
        </label>

        <select
          value={selectedJobSkill?.id ?? ""}
          disabled
          className="w-full rounded-lg border bg-gray-100 p-2"
        >
          {jobSkills
            .filter(
              (skill) =>
                skill.jobId === selectedJob
            )
            .map((skill) => (
              <option
                key={skill.id}
                value={skill.id}
              >
                {skill.name}
              </option>
            ))}
        </select>

        <p className="text-sm text-gray-500 mt-2">
          ※職業を変更すると自動で切り替わります
        </p>
      </div>

      {/* 発動遅延 */}
      <div>
        <label className="block font-semibold mb-2">
          職業技能 発動遅延(秒)
        </label>

        <input
          type="number"
          min={0}
          max={120}
          step={0.5}
          value={jobSkillStartTime}
          onChange={(e) =>
            setJobSkillStartTime(
              Number(e.target.value)
            )
          }
          className="w-full rounded-lg border p-2"
        />
      </div>
    </div>
  );
}