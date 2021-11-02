import React from "react";

var ski = "";
//Each person has 1-3 Skills, this is an if statement to change how they are written depending on number
//the person parameter was called from the mapped jsx
export default function SkillsComponent(person) {
    if (person.codeSkill.length < 2) {
        ski = "Skills: " + person.codeSkill;
        return ski;
    }
    if (person.codeSkill.length === 2) {
        ski = "Skills: " + person.codeSkill[0] + ", " + person.codeSkill[1];
        return ski;
    }
    if (
        person.codeSkill.length === 3 &&
        person.codeSkill !== "CSS" &&
        person.codeSkill !== "SQL"
    ) {
        ski =
            "Skills: " +
            person.codeSkill[0] +
            ", " +
            person.codeSkill[1] +
            ", " +
            person.codeSkill[2];
        return ski;
    } else {
        ski = "Skills: " + person.codeSkill;
        return ski;
    }
}
