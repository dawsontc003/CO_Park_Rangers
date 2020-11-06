# Team Name: CO Park Rangers

# Virtual U.S. National Park Tour (Four Colorado Parks)

# Summary

CO Park Rangers team has designed a website that is constructed to present the four U.S. National Parks found in the state of Colorado. These four parks are 1) Black Canyon, 2) Great Sand Dunes, 3) Mesa Verde and 4) Rocky Mountain National Park. During these tough times with COVID and forest fires, the ultimate mission is to support these parks through increasing transparency to the general public while also offering them an opportunity to describe the positive experiences they have had at the park.

# Objectives

The key objectives in developing the website are to show relevant park information that a visitor would want to see, show pictures displaying their natural beauty, and allow for a more personal experience where they can leave memories or positive comments.

# Files

There are a total of 11 files that were created to support this website. For HTML, there are five files, a main index page which is the landing spot for the user, and an individual HTML file for each of the four parks. The main page gives a general "About" description along with a map of Colorado showing where the four parks are located. The individual HTML pages for each park were created to provide more details on the park, show a park video and utilize the National Park API specifically. There are a total of five Javascript files, one for each of the five HTML files. Finally, one CSS file was used to change certain elements within HTML, such as the body, footer etc.

# Languages

In lieu of CSS Bootstrap, "MaterializeCSS" was used as the major framework design for the website. JQuery was used in each of the five Javascript files that pulled the fetch APIs from the U.S. National Park host site. This grabbed types of information such as park costs, locations, activities, weather, operating hours etc.

# Functionality

HTML Each of the five HMTL files are "mobile friendly" which adjusts the screen size accordingly. Additionally, "href" links are used throughout to allow the user to interchangeably connect between all pages. The top of the index main HTML file is more unique in it using a slider "div" from materialize to display pictures (four total, one for each park). These pictures are overlaid with short park "mottos" that the U.S. National Park Service as given to them.
JS The pictures displayed in the main HTML file are being pulled directly from the National Park Service using a fetch API that targets specific images the team identified. The individual park pages displays key park information obtained from the National Park via a fetch API through JQuery code in the individual park JS files. As the JQuery code reflects, the API for park activities is more unique as it is using a "for loop" to randomly select available activities for each one. All of this information is appended to the HTML files to professionally present the information. Comments typed in by the user are temporarily stored with a console.log, an array was created to be able to store multiple comments. A "click" event was written for the submit button to store the data locally.

# User Instructions

The user can launch from the main index HTML page by clicking on park names in the top right part of the page. This can also be done using the links in the footer as found across all HTML pages. On the individual park pages, a user can submit comments to share a memory from the park, offer words of encouragement or how they would like to financially support it.

# 3rd Party Site | References

3rd party websites used include the U.S. National Park Service Home Page (found in Footer) and each of the four Park's home pages as also supported by the U.S. National Park Service.

![Screen shot 1](https://user-images.githubusercontent.com/69283624/98423673-a30be080-204c-11eb-8703-173b63463cea.PNG)

![Sceen shot 2](https://user-images.githubusercontent.com/69283624/98423681-adc67580-204c-11eb-85a3-4499fc000a61.PNG)
