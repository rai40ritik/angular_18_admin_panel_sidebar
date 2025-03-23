import { Component } from '@angular/core';
import { CrmService } from '../services/crm.service';
import { Circular } from '../model/model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-circular',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  providers: [CrmService],
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent {
  circular: Circular = {
    department: '',
    title: '',
    description: '',
    attachment_url: ''
  };

  constructor(private crmService: CrmService) {}

  // ✅ Add Circular
  addCircular() {
    console.log("Sending Circular Data:", this.circular);

    this.crmService.addCircular(this.circular).subscribe(response => {
      alert(response.message);
      this.circular = { department: '', title: '', description: '', attachment_url: '' };
    }, error => {
      alert("Error: " + error.error.detail);
    });
  }
}
