/* *** Plan Aspects of My Module ***
My Clone Base Features
    -Initial Page view
        -Banner of two photos
        -On hover, shift photos to the left, add "View Photos" butotn on bottom right
    -Gallery View - on click of "View Photos" button
        -Dim rest of page, display flagship photo centrally
        -Arrows on left and right, and x button on top right to go back to exit Gallery View
        -Bottom Left PhotoNum/Total : Caption

My Clone Stretch Features
        -Show / Hide Photo List
            -If Show
            -Display 7 previous and next photos, with the highlighted central photo in the center
            -Arrows from gallery view also change the bottom list
            -User can click on any photo from below to change the central photo and shift photo list

API
-Define all the API endpoints that will be used to consume and publish data.
-What is the shape of the data (i.e. list all the properties and types) for each API endpoint and/or message?

Technologies to Use:
Front-end Framework: React
CSS Framework: Bootstrap
Server: Express
Database: MongoDB + Mongoose
Asset Compilation: Webpack
Transpilation: Babel
Testing Framework: Jest
End To End Testing: Puppeteer
Continuous Integration: CircleCI

Data Generation: http://lorempixel.com/nature


Data Shape:
  {
    id: Number,
    photos: [ { id: Number, url: String, caption: String}, … ]
  }


 Example: 
  {
      id: 78,
      photos: [ { id: 1, url: "imageURL.com", caption: "Malibu glamping" } ...]
  }


 Database:
 Do I need relational data? No, I won't be changing any of this data. Just displaying it.


Input: 
-RoomID
-Endpoint: /photos/<roomID>

Output: 
-Array of objects (3- 10) representing photos, with url and caption properties
    -Url property references a string representing an image url *Could potentially store binary in the database instead...TALK TO OLEG
    -Caption property references a string representing a short description of the photo

Airbnb Photo Gallery Component Features
    -Initial Page View
        -Banner of Two Photos
        -On hover, shift photos to left, add "View Photos" button on bottom right
    -Gallery View - on click of "View Photos" Button
        -Dim rest of page, display flagship photo centrally
        -Arrows on left and right, and X button on top right to go back to exit Gallery View
        -Bottom Left PhotoNum / Total Num of Photos: Caption
        -Show / Hide Photo List
            -If Show
            -Display 7 previous and next photos, with the highlighted central photo in the center
            -Arrows from gallery view also change the bottom list
            -User can click on any photo from below to change the central photo and shift photo list
*/
