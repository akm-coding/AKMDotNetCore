document.addEventListener('DOMContentLoaded', function() {

  /* initialize the external events
  -----------------------------------------------------------------*/

  // var containerEl = document.getElementById('external-events-list');
  // new FullCalendar.Draggable(containerEl, {
  //   itemSelector: '.fc-event',
  //   eventData: function(eventEl) {
  //     return {
  //       title: eventEl.innerText.trim()
  //     }
  //   }
  // });

  //// the individual way to do it
  var containerEl = document.getElementById('external-events-list');
  var eventEls = Array.prototype.slice.call(
    containerEl.querySelectorAll('.fc-event')
  );
  eventEls.forEach(function(eventEl) {
    new FullCalendar.Draggable(eventEl, {
      eventData: {
        title: eventEl.innerText.trim(),
      }
    });
  });

  /* initialize the calendar
  -----------------------------------------------------------------*/

  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    events: [
      {
        id: 'a',
        title: 'Ux designer meeting',
        start: '2022-12-05'
      },
      {
        id: 'b',
        title: 'Holiday',
        start: '2022-12-20'
      },
      {
        id: 'c',
        title: 'Christmas Party',
        start: '2022-12-25'
      },
      {
        id: 'd',
        title: 'New year event',
        start: '2022-12-31'
      },
      {
        id: 'e',
        title: 'Meeting',
        start: '2022-12-16'
      },
      {
        id: 'f',
        title: 'Birthday party',
        start: '2022-12-09'
      },
      {
        id: 'g',
        title: 'meeting',
        start: '2023-01-05'
      },
      {
        id: 'h',
        title: 'Holiday',
        start: '2023-01-14'
      },
      {
        id: 'i',
        title: 'Happy hour',
        start: '2023-01-20'
      },
      {
        id: 'j',
        title: 'Meeting',
        start: '2023-01-25'
      },
      {
        id: 'a',
        title: 'Ux designer meeting',
        start: '2023-02-02'
      },
      {
        id: 'b',
        title: 'Holiday',
        start: '2023-02-10'
      },
      {
        id: 'c',
        title: 'Long event',
        start: '2023-02-15'
      },
      {
        id: 'd',
        title: 'Holiday',
        start: '2023-02-22'
      },
      {
        id: 'e',
        title: 'Meeting',
        start: '2023-02-25'
      },
      {
        id: 'f',
        title: 'Birthday party',
        start: '2023-02-28'
      },
      {
        id: 'c',
        title: 'Long event',
        start: '2023-03-12'
      },
      {
        id: 'd',
        title: 'Holiday',
        start: '2023-03-08'
      },
      {
        id: 'e',
        title: 'Meeting',
        start: '2023-03-18'
      },
      {
        id: 'f',
        title: 'Birthday party',
        start: '2023-03-24'
      },
    ],
    editable: true,
    droppable: true, // this allows things to be dropped onto the calendar
    drop: function(arg) {
      // is the "remove after drop" checkbox checked?
      if (document.getElementById('drop-remove').checked) {
        // if so, remove the element from the "Draggable Events" list
        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
      }
    }
  });
  calendar.render();

});