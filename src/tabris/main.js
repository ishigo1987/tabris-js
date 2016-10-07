import './load-polyfill.js';
import './Tabris.js';

import Device, {create as createDevice, publishDeviceProperties} from './Device.js';
import App from './App';
import UI, {create as createUI} from './widgets/UI';
import ContentView from './widgets/ContentView';
import ImageData from './ImageData';
import {addDOMDocument} from './DOMDocument';
import {addWindowTimerMethods} from './WindowTimers';
import ProgressEvent from './DOMProgressEvent';
import Storage, {create as createStorage} from './WebStorage';
import WebSocket from './WebSocket';
import XMLHttpRequest from './XMLHttpRequest';
import Action from './widgets/Action';
import ActivityIndicator from './widgets/ActivityIndicator.js';
import Button from './widgets/Button.js';
import Canvas from './widgets/Canvas.js';
import CheckBox from './widgets/CheckBox.js';
import Cell from './widgets/Cell.js';
import CollectionView from './widgets/CollectionView.js';
import Composite from './widgets/Composite.js';
import Crypto from './Crypto.js';
import Drawer from './widgets/Drawer.js';
import ImageView from './widgets/ImageView.js';
import Page from './widgets/Page.js';
import PageSelector from './widgets/PageSelector.js';
import Picker from './widgets/Picker.js';
import ProgressBar from './widgets/ProgressBar.js';
import NativeObject from './NativeObject.js';
import NavigationView from './widgets/NavigationView';
import RadioButton from './widgets/RadioButton.js';
import ScrollView from './widgets/ScrollView.js';
import SearchAction from './widgets/SearchAction.js';
import Slider from './widgets/Slider.js';
import Switch from './widgets/Switch.js';
import Tab from './widgets/Tab.js';
import TabFolder from './widgets/TabFolder.js';
import TextInput from './widgets/TextInput.js';
import TextView from './widgets/TextView.js';
import ToggleButton from './widgets/ToggleButton.js';
import Video from './widgets/Video.js';
import WebView from './widgets/WebView.js';
import Widget from './Widget.js';
import WidgetCollection from './WidgetCollection.js';

module.exports = global.tabris;

window.Crypto = Crypto;
window.ImageData = ImageData;
window.ProgressEvent = ProgressEvent;
window.Storage = Storage;
window.WebSocket = WebSocket;
window.XMLHttpRequest = XMLHttpRequest;

addDOMDocument(window);
addWindowTimerMethods(window);

tabris.Action = Action;
tabris.ActivityIndicator = ActivityIndicator;
tabris.App = App;
tabris.Button = Button;
tabris.Canvas = Canvas;
tabris.Cell = Cell;
tabris.CheckBox = CheckBox;
tabris.CollectionView = CollectionView;
tabris.Composite = Composite;
tabris.ContentView = ContentView;
tabris.Crypto = Crypto;
tabris.Drawer = Drawer;
tabris.Device = Device;
tabris.ImageData = ImageData;
tabris.ImageView = ImageView;
tabris.Page = Page;
tabris.PageSelector = PageSelector;
tabris.Picker = Picker;
tabris.ProgressBar = ProgressBar;
tabris.ProgressEvent = ProgressEvent;
tabris.NativeObject = NativeObject;
tabris.NavigationView = NavigationView;
tabris.RadioButton = RadioButton;
tabris.ScrollView = ScrollView;
tabris.SearchAction = SearchAction;
tabris.Slider = Slider;
tabris.Storage = Storage;
tabris.Switch = Switch;
tabris.Tab = Tab;
tabris.TabFolder = TabFolder;
tabris.TextInput = TextInput;
tabris.TextView = TextView;
tabris.ToggleButton = ToggleButton;
tabris.UI = UI;
tabris.Video = Video;
tabris.WebView = WebView;
tabris.WebSocket = WebSocket;
tabris.Widget = Widget;
tabris.WidgetCollection = WidgetCollection;
tabris.XMLHttpRequest = XMLHttpRequest;

// TODO: ensure tabris is set up before load functions, remove when merged with tabris module
tabris._loadFunctions.unshift(() => {
  tabris.app = new App();
  tabris.ui = createUI();
  tabris.device = createDevice();
  publishDeviceProperties(tabris.device, window);
  window.localStorage = tabris.localStorage = createStorage();
  if (device.platform === 'iOS') {
    window.secureStorage = tabris.secureStorage = createStorage(true);
  }
  window.crypto = tabris.crypto = new Crypto();
});
