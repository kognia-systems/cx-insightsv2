import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListTileAudioComponent } from "@analysis/list-tile-audio/list-tile-audio.component";
import { AudioMultiasesor } from '@analysis/audio-multiasesor';
import { AgentModel } from '@agents/agent-model';
import { AgentsService } from '@agents/agents.service';

@Component({
  selector: 'app-upload-audios-multiasesor-page',
  standalone: true,
  imports: [CommonModule, ListTileAudioComponent],
  templateUrl: './upload-audios-multiasesor-page.component.html',
  styleUrl: './upload-audios-multiasesor-page.component.scss',
})
export class UploadAudiosMultiasesorPageComponent {
  audios: AudioMultiasesor[] = [];
  isDragOver = false;
  agents: AgentModel[] = [];

  constructor(
    private agentsService: AgentsService,
  ) {}

  ngOnInit() {
    this.agentsService.getAgents().subscribe((agents) => {
      this.agents = agents;
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;

    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(input.files);
    }
  }

  addFiles(fileList: FileList) {
    Array.from(fileList).forEach((file) => {
      if (file.type.startsWith('audio/')) {
        this.audios.push(new AudioMultiasesor('', '', file));
      }
    });
  }

  removeAudio(index: number) {
    this.audios.splice(index, 1);
  }
}
