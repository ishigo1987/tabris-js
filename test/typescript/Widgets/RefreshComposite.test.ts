import {EventObject, RefreshComposite, Properties} from 'tabris';

let widget: RefreshComposite = new RefreshComposite();

// Properties
let refreshEnabled: boolean;
let refreshIndicator: boolean;
let refreshMessage: string;

refreshEnabled = widget.refreshEnabled;
refreshIndicator = widget.refreshIndicator;
refreshMessage = widget.refreshMessage;

widget.refreshEnabled = refreshEnabled;
widget.refreshIndicator = refreshIndicator;
widget.refreshMessage = refreshMessage;

let properties: Properties<RefreshComposite> = {refreshEnabled, refreshIndicator, refreshMessage};
widget = new RefreshComposite(properties);
widget.set(properties);

// Events
let target: RefreshComposite = widget;
let timeStamp: number = 0;
let type: string = 'foo';

let sliderSelectEvent: EventObject<RefreshComposite> = {target, timeStamp, type};

widget.onRefresh((event: EventObject<RefreshComposite>) => {});

class CustomComponent extends RefreshComposite {
  public foo: string;
  constructor(props: Properties<RefreshComposite> & Partial<Pick<CustomComponent, 'foo'>>) { super(props); }
}

new CustomComponent({foo: 'bar'}).set({foo: 'bar'});
