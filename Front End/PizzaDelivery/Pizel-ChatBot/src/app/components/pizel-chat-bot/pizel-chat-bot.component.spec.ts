import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizelChatBotComponent } from './pizel-chat-bot.component';

describe('PizelChatBotComponent', () => {
  let component: PizelChatBotComponent;
  let fixture: ComponentFixture<PizelChatBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizelChatBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizelChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
