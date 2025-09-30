import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Skill = { name: string; level: number; tag?: string; icon?: string; };
type Category = { title: string; skills: Skill[] };

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  imports: [CommonModule],
})
export class SkillsComponent {
  categories: Category[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 90, tag: 'Framework', icon: '🅰️' },
        { name: 'TypeScript', level: 88, tag: 'Language', icon: '🧠' },
        { name: 'Tailwind CSS', level: 92, tag: 'Styling', icon: '🌬️' },
        { name: 'RxJS', level: 75, tag: 'Reactive', icon: '♻️' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 70, tag: 'Runtime', icon: '🟢' },
        { name: 'Express', level: 68, tag: 'API', icon: '🚏' },
        { name: 'Laravel', level: 80, tag: 'PHP', icon: '🧩' }
      ]
    },
    {
      title: 'Dev & Cloud',
      skills: [
        { name: 'Git', level: 85, tag: 'VCS', icon: '🧰' },
        { name: 'Docker', level: 65, tag: 'Containers', icon: '🐳' },
        { name: 'Firebase', level: 70, tag: 'Hosting', icon: '🔥' }
      ]
    }
  ];

  levelColor(level: number) {
    // Tailwind gradient stop based on level
    if (level >= 85) return 'from-emerald-500 to-emerald-400';
    if (level >= 70) return 'from-sky-500 to-sky-400';
    if (level >= 50) return 'from-amber-500 to-amber-400';
    return 'from-rose-500 to-rose-400';
  }
}
