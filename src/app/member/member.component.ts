import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberData;
  id;

  constructor(private memberService: MemberService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(objectId => {
      this.id = objectId['id'];
    });
    if (this.id) {
      this.memberService.memberData(this.id)
        .subscribe(memberDataRes => {
          this.memberData = memberDataRes;
        })
    }
  };

};
