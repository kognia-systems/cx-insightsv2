import { AgentModel } from '@agents/agent-model';
import { AgentsService } from '@agents/agents.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'list-tile-audio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-tile-audio.component.html',
  styleUrl: './list-tile-audio.component.scss',
})
export class ListTileAudioComponent {
  @Input() file!: File;
  @Input() index!: number;
  @Input() agents: AgentModel[] = [];
  @Output() onRemove = new EventEmitter<number>();
  @Output() onSelectAgent = new EventEmitter<AgentModel>();

  audio!: HTMLAudioElement;
  selectedAgent: string = '';
  filteredAgents: AgentModel[] = [];
  isPlaying: boolean = false;

  onSearchAsesor(term: string) {
    this.filteredAgents = this.agents.filter((a) =>
      a.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  onSelectAsesor(agent: AgentModel) {
    this.selectedAgent = agent.name;
    this.onSelectAgent.emit(agent);
    this.filteredAgents = [];
  }

  ngOnInit(): void {
    const audioURL = URL.createObjectURL(this.file);
    this.audio = new Audio(audioURL);
    this.filteredAgents = this.agents;
  }

  ngOnDestroy(): void {
    this.audio.pause();
    this.audio = null!;
  }

  play(): void {
    this.audio.play();
    this.isPlaying = true;
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying = false;
  }

  removeAudio(): void {
    this.stop();
    this.onRemove.emit(this.index);
  }

  getFileSize(file: File): string {
    const sizeInMB = file.size / (1024 * 1024);
    return `${sizeInMB.toFixed(2)} MB`;
  }
}
