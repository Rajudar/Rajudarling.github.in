
//check from the objects.js to find greater than or equal to 85marks.
var g_class = {
  'name': "Dec21WebFundamentals",
  'instructor': {
    'name': "Aayush Sinha",
    'subject': "MERN"
  },
  'students': [{
      'name': 'jon snow',
      'marks': 81,
    },
    {
      'name': 'cersei lannister',
      'marks': 86,
    },
    {
      'name': 'arya stark',
      'marks': 70,
    },
    {
      'name': 'danaerys targarean',
      'marks': 70,
    },
    {
     'name': 'tokyo',
     'marks': 90,
    },
    {
     'name': 'klaus machaelson',
     'marks': 85,
    },
    {
     'name': 'cheryl bloosom',
     'marks': 88,
    }
  ],
};
for( var property=0; property<g_class.students.length; property++ ){

  if( g_class.students[property].marks>=85 ){

    console.log( g_class.students[property].name );
  }
}
