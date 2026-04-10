// ===================== IMAGE IMPORTS =====================
import project1a from "./demos/project1a.png";
import project2b from "./demos/project2b.png";
import project3a from "./demos/project3a.png";
import project4a from "./demos/project4a.png";


// ===================== PROJECT DATA =====================
const projects = [
    {
        id: "project-01",
        category: "Electronics",
        icon: "bi-cpu",
        title: "LED Blinker Circuit",
        description:
            "A timing-based LED circuit that turns LEDs ON and OFF using resistors, capacitors, and a 555 timer.",
        img: project1a,
        meta: {
            difficulty: "Beginner",
            tags: ["LED", "Timer Circuit", "KiCAD", "TinkerCAD"],
            tools: ["TinkerCAD", "KiCAD"],
            date: "2024-12-15",
        },
        modal: {
            title: "LED Blinker Circuit",
            images: [project1a, project1a, project1a, project1a, project1a],
            learnings: [
                "Building RC timing circuits and LED drivers.",
                "Understanding how 555 timer output cycles operate.",
                "Simulating blink behavior and designing PCB traces in KiCAD.",
            ],
        },
    },
    {
        id: "project-02",
        category: "Power Electronics",
        icon: "bi-battery-charging",
        title: "Power Bank Circuit",
        description:
            "A rechargeable power system using a Li-ion battery and boost converter to supply a stable 5V USB output.",
        img: project2b,
        meta: {
            difficulty: "Intermediate",
            tags: ["Battery", "Boost Converter", "Regulation", "KiCAD"],
            tools: ["TinkerCAD", "KiCAD"],
            date: "2024-11-20",
        },
        modal: {
            title: "Power Bank Circuit",
            images: [project2b],
            learnings: [
                "How boost converters step voltage from 3.7V to 5V.",
                "Battery management and protection principles.",
                "Designing power circuits and routing in KiCAD.",
            ],
        },
    },

    {
        id: "project-03",
        category: "Automation",
        icon: "bi-lightbulb",
        title: "Street Light Sensor System",
        description:
            "An automatic lighting system using an LDR to control street lights based on ambient light levels.",
        img: project3a,
        meta: {
            difficulty: "Beginner",
            tags: ["LDR", "Automatic Lighting", "Sensors"],
            tools: ["TinkerCAD", "KiCAD"],
            date: "2024-10-10",
        },
        modal: {
            title: "Street Light Sensor System",
            images: [project3a],
            learnings: [
                "Understanding LDR resistance variation with light.",
                "Comparator-based and MCU-based switching logic.",
                "Simulating sensors and creating PCB schematics.",
            ],
        },
    },

    {
        id: "project-04",
        category: "Security Systems",
        icon: "bi-shield-lock",
        title: "Motion Detector Circuit",
        description:
            "A motion-sensing circuit using PIR sensors to trigger alarms or lighting outputs.",
        img: project4a,
        meta: {
            difficulty: "Intermediate",
            tags: ["PIR Sensor", "Security", "Alarms"],
            tools: ["TinkerCAD", "KiCAD"],
            date: "2024-09-05",
        },
        modal: {
            title: "Motion Detector Circuit",
            images: [project4a],
            learnings: [
                "How PIR sensors detect infrared radiation.",
                "Triggering alarms using digital outputs.",
                "Routing sensor modules in KiCAD.",
            ],
        },
    },
];

export default projects;