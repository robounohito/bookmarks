// tslint:disable:max-line-length

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.endsWith('bookmarks')
      && request.method === 'GET') {
      // return throwError(new HttpErrorResponse({ error: { code: 1035 } })).pipe(delay(50));
      return of(new HttpResponse({
        status: 200, body: bookmarks
      })).pipe(delay(250));
    }
    return next.handle(request);
  }
}

const bookmarks = [{
  id: 1,
  name: 'Youtags',
  url: 'https://prweb.com/justo/aliquam/quis.aspx?pulvinar=accumsan&sed=tellus&nisl=nisi&nunc=eu&rhoncus=orci&dui=mauris&vel=lacinia&sem=sapien&sed=quis&sagittis=libero&nam=nullam&congue=sit&risus=amet&semper=turpis&porta=elementum&volutpat=ligula&quam=vehicula&pede=consequat&lobortis=morbi&ligula=a&sit=ipsum&amet=integer&eleifend=a&pede=nibh&libero=in&quis=quis&orci=justo&nullam=maecenas&molestie=rhoncus&nibh=aliquam&in=lacus&lectus=morbi&pellentesque=quis&at=tortor&nulla=id&suspendisse=nulla&potenti=ultrices&cras=aliquet',
  group: 'Work'
}, {
  id: 2,
  name: 'Wordware',
  url: 'https://blogspot.com/primis/in/faucibus/orci/luctus.js?nisi=cursus&eu=urna&orci=ut&mauris=tellus&lacinia=nulla&sapien=ut&quis=erat&libero=id&nullam=mauris&sit=vulputate&amet=elementum&turpis=nullam&elementum=varius&ligula=nulla&vehicula=facilisi&consequat=cras&morbi=non&a=velit&ipsum=nec&integer=nisi&a=vulputate&nibh=nonummy&in=maecenas&quis=tincidunt&justo=lacus&maecenas=at&rhoncus=velit&aliquam=vivamus&lacus=vel&morbi=nulla&quis=eget&tortor=eros&id=elementum&nulla=pellentesque&ultrices=quisque&aliquet=porta&maecenas=volutpat&leo=erat&odio=quisque&condimentum=erat&id=eros&luctus=viverra&nec=eget&molestie=congue&sed=eget&justo=semper&pellentesque=rutrum&viverra=nulla&pede=nunc&ac=purus&diam=phasellus&cras=in&pellentesque=felis&volutpat=donec&dui=semper&maecenas=sapien&tristique=a&est=libero&et=nam&tempus=dui&semper=proin&est=leo&quam=odio&pharetra=porttitor&magna=id&ac=consequat&consequat=in&metus=consequat&sapien=ut&ut=nulla&nunc=sed&vestibulum=accumsan&ante=felis&ipsum=ut&primis=at&in=dolor&faucibus=quis&orci=odio&luctus=consequat&et=varius&ultrices=integer&posuere=ac&cubilia=leo&curae=pellentesque&mauris=ultrices&viverra=mattis&diam=odio&vitae=donec&quam=vitae&suspendisse=nisi&potenti=nam&nullam=ultrices&porttitor=libero&lacus=non&at=mattis&turpis=pulvinar',
  group: 'Leisure'
}, {
  id: 3,
  name: 'Roomm',
  url: 'https://ucsd.edu/vel.html?nulla=a&neque=ipsum&libero=integer&convallis=a&eget=nibh&eleifend=in&luctus=quis&ultricies=justo&eu=maecenas&nibh=rhoncus&quisque=aliquam&id=lacus&justo=morbi&sit=quis&amet=tortor&sapien=id&dignissim=nulla&vestibulum=ultrices&vestibulum=aliquet&ante=maecenas&ipsum=leo&primis=odio&in=condimentum&faucibus=id&orci=luctus&luctus=nec&et=molestie&ultrices=sed&posuere=justo&cubilia=pellentesque&curae=viverra&nulla=pede&dapibus=ac&dolor=diam&vel=cras&est=pellentesque&donec=volutpat&odio=dui&justo=maecenas&sollicitudin=tristique&ut=est&suscipit=et&a=tempus&feugiat=semper&et=est&eros=quam&vestibulum=pharetra&ac=magna&est=ac&lacinia=consequat&nisi=metus&venenatis=sapien&tristique=ut&fusce=nunc&congue=vestibulum&diam=ante&id=ipsum&ornare=primis&imperdiet=in&sapien=faucibus&urna=orci&pretium=luctus&nisl=et&ut=ultrices&volutpat=posuere&sapien=cubilia&arcu=curae&sed=mauris&augue=viverra&aliquam=diam&erat=vitae&volutpat=quam&in=suspendisse&congue=potenti&etiam=nullam&justo=porttitor&etiam=lacus&pretium=at&iaculis=turpis&justo=donec&in=posuere&hac=metus&habitasse=vitae&platea=ipsum&dictumst=aliquam&etiam=non&faucibus=mauris&cursus=morbi&urna=non&ut=lectus&tellus=aliquam&nulla=sit',
  group: 'Work'
}, {
  id: 4,
  name: 'LiveZ',
  url: 'https://unc.edu/porttitor/id/consequat.js?et=in&magnis=felis&dis=donec&parturient=semper&montes=sapien&nascetur=a&ridiculus=libero&mus=nam&etiam=dui&vel=proin&augue=leo&vestibulum=odio&rutrum=porttitor&rutrum=id&neque=consequat&aenean=in&auctor=consequat&gravida=ut&sem=nulla&praesent=sed&id=accumsan&massa=felis&id=ut&nisl=at&venenatis=dolor&lacinia=quis&aenean=odio&sit=consequat&amet=varius&justo=integer&morbi=ac&ut=leo&odio=pellentesque&cras=ultrices&mi=mattis&pede=odio&malesuada=donec&in=vitae&imperdiet=nisi&et=nam&commodo=ultrices&vulputate=libero&justo=non&in=mattis&blandit=pulvinar&ultrices=nulla&enim=pede&lorem=ullamcorper&ipsum=augue&dolor=a&sit=suscipit&amet=nulla&consectetuer=elit&adipiscing=ac&elit=nulla&proin=sed&interdum=vel&mauris=enim&non=sit&ligula=amet&pellentesque=nunc&ultrices=viverra&phasellus=dapibus&id=nulla&sapien=suscipit&in=ligula&sapien=in&iaculis=lacus&congue=curabitur&vivamus=at&metus=ipsum&arcu=ac&adipiscing=tellus&molestie=semper&hendrerit=interdum&at=mauris&vulputate=ullamcorper&vitae=purus&nisl=sit&aenean=amet&lectus=nulla&pellentesque=quisque&eget=arcu&nunc=libero&donec=rutrum&quis=ac',
  group: 'Work'
}, {
  id: 5,
  name: 'Skipfire',
  url: 'http://photobucket.com/in/libero/ut/massa/volutpat.html?proin=magna&at=at&turpis=nunc&a=commodo&pede=placerat&posuere=praesent&nonummy=blandit&integer=nam&non=nulla&velit=integer&donec=pede&diam=justo&neque=lacinia&vestibulum=eget&eget=tincidunt&vulputate=eget&ut=tempus&ultrices=vel&vel=pede&augue=morbi&vestibulum=porttitor&ante=lorem&ipsum=id&primis=ligula&in=suspendisse&faucibus=ornare&orci=consequat&luctus=lectus&et=in&ultrices=est&posuere=risus&cubilia=auctor&curae=sed&donec=tristique&pharetra=in&magna=tempus&vestibulum=sit&aliquet=amet&ultrices=sem&erat=fusce&tortor=consequat&sollicitudin=nulla&mi=nisl&sit=nunc&amet=nisl&lobortis=duis&sapien=bibendum&sapien=felis&non=sed&mi=interdum&integer=venenatis&ac=turpis&neque=enim&duis=blandit&bibendum=mi&morbi=in&non=porttitor&quam=pede&nec=justo&dui=eu&luctus=massa&rutrum=donec&nulla=dapibus&tellus=duis&in=at&sagittis=velit&dui=eu&vel=est&nisl=congue&duis=elementum&ac=in&nibh=hac&fusce=habitasse&lacus=platea&purus=dictumst&aliquet=morbi&at=vestibulum&feugiat=velit&non=id&pretium=pretium&quis=iaculis&lectus=diam',
  group: 'Leisure'
}, {
  id: 6,
  name: 'Meevee',
  url: 'http://forbes.com/tincidunt/eget/tempus/vel/pede.aspx?hac=nec&habitasse=nisi&platea=volutpat&dictumst=eleifend&morbi=donec&vestibulum=ut&velit=dolor&id=morbi&pretium=vel&iaculis=lectus&diam=in&erat=quam&fermentum=fringilla&justo=rhoncus&nec=mauris&condimentum=enim&neque=leo&sapien=rhoncus&placerat=sed&ante=vestibulum&nulla=sit&justo=amet&aliquam=cursus&quis=id&turpis=turpis&eget=integer&elit=aliquet&sodales=massa&scelerisque=id&mauris=lobortis&sit=convallis&amet=tortor&eros=risus&suspendisse=dapibus&accumsan=augue&tortor=vel&quis=accumsan&turpis=tellus',
  group: 'Leisure'
}, {
  id: 7,
  name: 'Abata',
  url: 'https://alibaba.com/turpis/adipiscing/lorem/vitae.html?ultrices=pede',
  group: 'Work'
}, {
  id: 8,
  name: 'Meemm',
  url: 'http://google.co.uk/sapien/cursus/vestibulum/proin.json?integer=nisl&a=aenean&nibh=lectus&in=pellentesque&quis=eget&justo=nunc&maecenas=donec&rhoncus=quis&aliquam=orci&lacus=eget&morbi=orci&quis=vehicula&tortor=condimentum&id=curabitur&nulla=in&ultrices=libero&aliquet=ut&maecenas=massa&leo=volutpat&odio=convallis&condimentum=morbi&id=odio&luctus=odio&nec=elementum&molestie=eu&sed=interdum&justo=eu&pellentesque=tincidunt&viverra=in&pede=leo&ac=maecenas&diam=pulvinar&cras=lobortis&pellentesque=est&volutpat=phasellus&dui=sit&maecenas=amet&tristique=erat&est=nulla&et=tempus&tempus=vivamus&semper=in&est=felis&quam=eu&pharetra=sapien&magna=cursus&ac=vestibulum&consequat=proin&metus=eu&sapien=mi&ut=nulla&nunc=ac&vestibulum=enim&ante=in&ipsum=tempor',
  group: 'Leisure'
}, {
  id: 9,
  name: 'Zooveo',
  url: 'http://google.cn/aliquet.aspx?pretium=tincidunt&quis=nulla&lectus=mollis&suspendisse=molestie&potenti=lorem&in=quisque&eleifend=ut&quam=erat&a=curabitur&odio=gravida&in=nisi&hac=at&habitasse=nibh&platea=in&dictumst=hac&maecenas=habitasse&ut=platea&massa=dictumst&quis=aliquam&augue=augue&luctus=quam&tincidunt=sollicitudin&nulla=vitae&mollis=consectetuer&molestie=eget&lorem=rutrum',
  group: 'Leisure'
}, {
  id: 10,
  name: 'Linklinks',
  url: 'http://msu.edu/mattis/odio/donec/vitae/nisi.js?etiam=amet&faucibus=lobortis&cursus=sapien&urna=sapien&ut=non&tellus=mi&nulla=integer&ut=ac&erat=neque&id=duis&mauris=bibendum&vulputate=morbi&elementum=non&nullam=quam&varius=nec&nulla=dui&facilisi=luctus&cras=rutrum&non=nulla&velit=tellus&nec=in&nisi=sagittis&vulputate=dui&nonummy=vel&maecenas=nisl&tincidunt=duis&lacus=ac&at=nibh&velit=fusce&vivamus=lacus&vel=purus&nulla=aliquet&eget=at&eros=feugiat&elementum=non&pellentesque=pretium&quisque=quis&porta=lectus&volutpat=suspendisse&erat=potenti&quisque=in&erat=eleifend&eros=quam&viverra=a&eget=odio&congue=in&eget=hac&semper=habitasse&rutrum=platea&nulla=dictumst',
  group: 'Work'
}, {
  id: 11,
  name: 'Rhynyx',
  url: 'https://nasa.gov/sapien/dignissim/vestibulum/vestibulum/ante/ipsum.json?amet=quam&turpis=sapien&elementum=varius&ligula=ut&vehicula=blandit&consequat=non&morbi=interdum&a=in&ipsum=ante&integer=vestibulum&a=ante&nibh=ipsum&in=primis&quis=in&justo=faucibus&maecenas=orci&rhoncus=luctus&aliquam=et&lacus=ultrices&morbi=posuere&quis=cubilia&tortor=curae&id=duis&nulla=faucibus&ultrices=accumsan&aliquet=odio&maecenas=curabitur&leo=convallis&odio=duis&condimentum=consequat&id=dui&luctus=nec&nec=nisi&molestie=volutpat&sed=eleifend&justo=donec&pellentesque=ut&viverra=dolor&pede=morbi&ac=vel&diam=lectus&cras=in&pellentesque=quam&volutpat=fringilla&dui=rhoncus&maecenas=mauris&tristique=enim&est=leo&et=rhoncus&tempus=sed',
  group: 'Personal'
}, {
  id: 12,
  name: 'Twitterwire',
  url: 'http://google.com.hk/diam/in/magna/bibendum/imperdiet/nullam/orci.aspx?eu=massa&magna=volutpat&vulputate=convallis&luctus=morbi&cum=odio&sociis=odio&natoque=elementum&penatibus=eu&et=interdum&magnis=eu&dis=tincidunt&parturient=in&montes=leo&nascetur=maecenas&ridiculus=pulvinar&mus=lobortis&vivamus=est&vestibulum=phasellus&sagittis=sit&sapien=amet&cum=erat&sociis=nulla&natoque=tempus&penatibus=vivamus&et=in&magnis=felis&dis=eu&parturient=sapien&montes=cursus&nascetur=vestibulum&ridiculus=proin&mus=eu&etiam=mi&vel=nulla&augue=ac&vestibulum=enim&rutrum=in&rutrum=tempor&neque=turpis&aenean=nec&auctor=euismod&gravida=scelerisque&sem=quam&praesent=turpis&id=adipiscing&massa=lorem&id=vitae&nisl=mattis&venenatis=nibh&lacinia=ligula&aenean=nec&sit=sem&amet=duis&justo=aliquam&morbi=convallis&ut=nunc&odio=proin&cras=at&mi=turpis&pede=a&malesuada=pede&in=posuere&imperdiet=nonummy&et=integer&commodo=non',
  group: 'Personal'
}, {
  id: 13,
  name: 'Skinte',
  url: 'https://com.com/vulputate/justo/in/blandit/ultrices/enim/lorem.aspx?nec=est&nisi=lacinia&vulputate=nisi&nonummy=venenatis&maecenas=tristique&tincidunt=fusce&lacus=congue&at=diam&velit=id&vivamus=ornare&vel=imperdiet&nulla=sapien&eget=urna&eros=pretium&elementum=nisl&pellentesque=ut&quisque=volutpat&porta=sapien&volutpat=arcu&erat=sed&quisque=augue&erat=aliquam&eros=erat&viverra=volutpat&eget=in&congue=congue&eget=etiam&semper=justo&rutrum=etiam&nulla=pretium&nunc=iaculis&purus=justo&phasellus=in&in=hac&felis=habitasse&donec=platea&semper=dictumst&sapien=etiam&a=faucibus&libero=cursus&nam=urna&dui=ut&proin=tellus&leo=nulla&odio=ut&porttitor=erat&id=id&consequat=mauris&in=vulputate&consequat=elementum&ut=nullam&nulla=varius&sed=nulla&accumsan=facilisi&felis=cras&ut=non&at=velit&dolor=nec&quis=nisi&odio=vulputate&consequat=nonummy&varius=maecenas&integer=tincidunt&ac=lacus&leo=at&pellentesque=velit&ultrices=vivamus&mattis=vel&odio=nulla&donec=eget&vitae=eros&nisi=elementum&nam=pellentesque&ultrices=quisque&libero=porta&non=volutpat&mattis=erat&pulvinar=quisque&nulla=erat',
  group: 'Work'
}, {
  id: 14,
  name: 'Skynoodle',
  url: 'https://hhs.gov/auctor/gravida/sem.js?commodo=curae&vulputate=mauris&justo=viverra&in=diam&blandit=vitae&ultrices=quam&enim=suspendisse&lorem=potenti&ipsum=nullam&dolor=porttitor&sit=lacus&amet=at&consectetuer=turpis&adipiscing=donec&elit=posuere&proin=metus&interdum=vitae&mauris=ipsum&non=aliquam&ligula=non&pellentesque=mauris&ultrices=morbi&phasellus=non&id=lectus&sapien=aliquam&in=sit&sapien=amet&iaculis=diam&congue=in&vivamus=magna&metus=bibendum&arcu=imperdiet&adipiscing=nullam&molestie=orci&hendrerit=pede&at=venenatis&vulputate=non&vitae=sodales&nisl=sed&aenean=tincidunt&lectus=eu&pellentesque=felis&eget=fusce&nunc=posuere&donec=felis&quis=sed&orci=lacus&eget=morbi&orci=sem&vehicula=mauris&condimentum=laoreet&curabitur=ut&in=rhoncus&libero=aliquet&ut=pulvinar&massa=sed&volutpat=nisl&convallis=nunc&morbi=rhoncus&odio=dui&odio=vel&elementum=sem&eu=sed&interdum=sagittis&eu=nam&tincidunt=congue&in=risus&leo=semper&maecenas=porta&pulvinar=volutpat&lobortis=quam&est=pede&phasellus=lobortis&sit=ligula&amet=sit&erat=amet&nulla=eleifend&tempus=pede&vivamus=libero&in=quis&felis=orci&eu=nullam&sapien=molestie&cursus=nibh&vestibulum=in&proin=lectus&eu=pellentesque&mi=at&nulla=nulla',
  group: 'Work'
}, {
  id: 15,
  name: 'Yadel',
  url: 'http://oakley.com/ipsum/dolor.json?in=sed&congue=vestibulum&etiam=sit&justo=amet&etiam=cursus&pretium=id&iaculis=turpis&justo=integer&in=aliquet&hac=massa&habitasse=id&platea=lobortis&dictumst=convallis&etiam=tortor&faucibus=risus&cursus=dapibus',
  group: 'Personal'
}, {
  id: 16,
  name: 'Avamba',
  url: 'https://yahoo.co.jp/tempus/vivamus/in/felis/eu.xml?lacinia=sed&nisi=ante&venenatis=vivamus&tristique=tortor&fusce=duis&congue=mattis&diam=egestas&id=metus&ornare=aenean&imperdiet=fermentum&sapien=donec&urna=ut&pretium=mauris&nisl=eget&ut=massa&volutpat=tempor&sapien=convallis&arcu=nulla&sed=neque&augue=libero&aliquam=convallis&erat=eget&volutpat=eleifend&in=luctus&congue=ultricies&etiam=eu&justo=nibh&etiam=quisque&pretium=id&iaculis=justo&justo=sit&in=amet&hac=sapien&habitasse=dignissim&platea=vestibulum&dictumst=vestibulum&etiam=ante&faucibus=ipsum&cursus=primis&urna=in&ut=faucibus&tellus=orci&nulla=luctus&ut=et&erat=ultrices&id=posuere&mauris=cubilia&vulputate=curae&elementum=nulla&nullam=dapibus&varius=dolor&nulla=vel&facilisi=est&cras=donec&non=odio&velit=justo&nec=sollicitudin&nisi=ut&vulputate=suscipit&nonummy=a&maecenas=feugiat&tincidunt=et&lacus=eros&at=vestibulum&velit=ac&vivamus=est&vel=lacinia',
  group: 'Personal'
}, {
  id: 17,
  name: 'Jamia',
  url: 'https://g.co/etiam/justo.json?sapien=sit&iaculis=amet&congue=cursus&vivamus=id&metus=turpis&arcu=integer&adipiscing=aliquet&molestie=massa&hendrerit=id&at=lobortis&vulputate=convallis&vitae=tortor&nisl=risus&aenean=dapibus&lectus=augue&pellentesque=vel&eget=accumsan&nunc=tellus&donec=nisi&quis=eu&orci=orci&eget=mauris&orci=lacinia&vehicula=sapien&condimentum=quis&curabitur=libero&in=nullam&libero=sit&ut=amet&massa=turpis',
  group: 'Personal'
}, {
  id: 18,
  name: 'Gigabox',
  url: 'https://microsoft.com/erat/curabitur/gravida.json?felis=ligula&sed=suspendisse&interdum=ornare&venenatis=consequat&turpis=lectus&enim=in&blandit=est&mi=risus&in=auctor&porttitor=sed&pede=tristique&justo=in&eu=tempus&massa=sit&donec=amet&dapibus=sem&duis=fusce&at=consequat&velit=nulla&eu=nisl&est=nunc&congue=nisl&elementum=duis&in=bibendum&hac=felis&habitasse=sed&platea=interdum&dictumst=venenatis&morbi=turpis&vestibulum=enim&velit=blandit&id=mi&pretium=in&iaculis=porttitor&diam=pede&erat=justo&fermentum=eu&justo=massa&nec=donec&condimentum=dapibus&neque=duis&sapien=at&placerat=velit&ante=eu&nulla=est&justo=congue&aliquam=elementum&quis=in&turpis=hac&eget=habitasse&elit=platea&sodales=dictumst&scelerisque=morbi&mauris=vestibulum&sit=velit&amet=id&eros=pretium&suspendisse=iaculis&accumsan=diam&tortor=erat&quis=fermentum&turpis=justo&sed=nec&ante=condimentum&vivamus=neque&tortor=sapien&duis=placerat&mattis=ante&egestas=nulla&metus=justo&aenean=aliquam&fermentum=quis&donec=turpis&ut=eget&mauris=elit&eget=sodales&massa=scelerisque&tempor=mauris',
  group: 'Personal'
}, {
  id: 19,
  name: 'Quaxo',
  url: 'http://ucoz.ru/magna/vulputate/luctus/cum.jsp?neque=aliquet&libero=at&convallis=feugiat&eget=non&eleifend=pretium&luctus=quis&ultricies=lectus&eu=suspendisse&nibh=potenti&quisque=in&id=eleifend&justo=quam&sit=a&amet=odio&sapien=in&dignissim=hac&vestibulum=habitasse&vestibulum=platea&ante=dictumst&ipsum=maecenas&primis=ut&in=massa&faucibus=quis&orci=augue&luctus=luctus&et=tincidunt&ultrices=nulla&posuere=mollis&cubilia=molestie&curae=lorem&nulla=quisque&dapibus=ut&dolor=erat&vel=curabitur&est=gravida&donec=nisi&odio=at&justo=nibh&sollicitudin=in&ut=hac&suscipit=habitasse&a=platea&feugiat=dictumst&et=aliquam&eros=augue&vestibulum=quam&ac=sollicitudin&est=vitae&lacinia=consectetuer&nisi=eget&venenatis=rutrum&tristique=at&fusce=lorem&congue=integer&diam=tincidunt&id=ante&ornare=vel&imperdiet=ipsum&sapien=praesent&urna=blandit&pretium=lacinia&nisl=erat&ut=vestibulum&volutpat=sed&sapien=magna&arcu=at&sed=nunc&augue=commodo&aliquam=placerat&erat=praesent&volutpat=blandit&in=nam&congue=nulla&etiam=integer&justo=pede&etiam=justo&pretium=lacinia&iaculis=eget&justo=tincidunt&in=eget',
  group: 'Personal'
}, {
  id: 20,
  name: 'Tazzy',
  url: 'http://purevolume.com/luctus/tincidunt/nulla/mollis/molestie/lorem/quisque.png?vehicula=vestibulum&consequat=rutrum&morbi=rutrum&a=neque&ipsum=aenean&integer=auctor',
  group: 'Personal'
}];
