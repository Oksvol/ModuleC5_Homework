// Задание по преобразованию XML в объект JS

const exampleXML = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();

const xmlDom = parser.parseFromString(exampleXML, "text/xml");
const mainNode = xmlDom.firstChild;

const student1 = mainNode.querySelector("student");
const student1FirstName = student1.querySelector("name > first");
const student1SecondName = student1.querySelector("name > second");
const student1Age = student1.querySelector("age");
const student1Prof = student1.querySelector("prof");
const student1Lang = student1.querySelector("name").getAttribute("lang");

const student2 = mainNode.querySelector("student").nextElementSibling;
const student2FirstName = student2.querySelector("name > first");
const student2SecondName = student2.querySelector("name > second");
const student2Age = student2.querySelector("age");
const student2Prof = student2.querySelector("prof");
const student2Lang = student2.querySelector("name").getAttribute("lang");

const objectFromXml = {
	list: [
	{name: student1FirstName.textContent + student1SecondName.textContent, age: +student1Age.textContent, prof: student1Prof.textContent, lang: student1Lang.textContent},
	{name: student2FirstName.textContent + student2SecondName.textContent, age: +student2Age.textContent, prof: student2Prof.textContent, lang: student2Lang.textContent}
	]
};

console.log(objectFromXml);