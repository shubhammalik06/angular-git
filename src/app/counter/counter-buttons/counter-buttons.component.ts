import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from 'src/app/shared/interfaces/common.interface';
import { decrement, increment, reset } from 'src/app/counter/state/counter.actions';
import { AppState } from 'src/app/shared/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());
  }

  onReset(){
    this.store.dispatch(reset());
  }
}