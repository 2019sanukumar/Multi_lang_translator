# Multi_lang_translator
## Installation
install node and npm 
Use the express library  

```bash
npm install express
```

install google translate api
```bash
npm install --save @iamtraction/google-translate
```

make sure your sustem have mongodb installed.
install monogoose dependecies using

```bash
npm install mongoose
```



## Usage
this is the api which will return the value to target language
```let response = await translate('Thank you', { from: 'auto', to: 'it' });
      if (response.err) { console.log('error');}
      else { 
        console.log(response.text)
        translatedtext1=response.text;
      };
```
## Restful API

1.For sending the string to to be translated
```bash
http://localhost:8080/api/input
```
2.For sending the string current language
```bash
http://localhost:8080/api/from
```
3.For sending the string to to be translated in which language
```bash
http://localhost:8080/api/to
```

4.For getting  the response 
```bash
http://localhost:8080/translate
```


## test cases 

1.giving the text
```bash
"text":"hey this is multi language translator with cache"
```

2.giving the source language
```bash
"text":"ei"//code for english
```
3.giving the desetination language
```bash
"text":"hi"//code for hindi
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
