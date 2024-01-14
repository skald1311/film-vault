
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/skald1311/film-vault">
    <img src="https://github.com/skald1311/film-vault/assets/84189062/13a7ad63-2361-4473-99d1-4eb45c077a02" alt="Logo" width="100" height="100">
  </a>



<h3 align="center">Film Vault</h3>

  <p align="center">
    Effortlessly track and rate your watched movies with this React-powered app
    <br />
    <a href="https://film-vault-dmhoang.netlify.app"><strong>LIVE DEMO</strong></a>
    <br />
    <br />
    <a href="https://github.com/skald1311/film-vault/issues">Report Bug</a>
    ·
    <a href="https://github.com/skald1311/film-vault/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Film Vault, our React-powered app, offers a streamlined way to track and rate your watched movies. Organize your cinematic adventures effortlessly in a secure digital vault, creating a personalized archive of your favorite films. With a user-friendly interface, Film Vault not only simplifies movie management but also integrates IMDb ratings, letting you see how others have rated the same films. Dive into a curated movie experience that combines your preferences with the collective insights of the IMDb community.

![image](https://github.com/skald1311/film-vault/assets/84189062/6ebed64f-e041-4c87-94cc-299fc65b0dd5)



Key Features:

1. Effortless Movie Tracking: Utilizing a single-page app design principle, Film Vault provides a seamless and responsive user interface, offering an elegant and friendly feel for effortless movie tracking.

2. Secure Local Storage: Film Vault leverages your browser's local storage, ensuring a secure and convenient way to store your watched list and ratings. This allows you to revisit and update your movie records at any time without the need for an external account.

3. Automatic Rating Insights: Film Vault calculates and displays your average rating for your watched list alongside the average IMDb user rating, providing valuable insights for easy comparisons and a deeper understanding of your cinematic preferences.

Enhance your projects effortlessly with our React StarRating Component. As a small but impactful side offering, we've crafted a dedicated API file that you can seamlessly download from our source code. This allows you to integrate our sleek star rating system directly into your React applications, bringing a touch of Film Vault's user-friendly design to your own projects. Elevate your UI effortlessly with our downloadable React Component, making cinematic flair a seamless addition to your development toolkit.

Originally conceived as a course project, Film Vault has evolved into a personalized movie tracking experience that now reflects my unique style and preferences. While its inception may have been part of an academic journey, I've transformed the app by infusing it with a carefully curated color palette and minor details to align with my aesthetic vision.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Python][Python]][Python-url]
* [![Pytorch][Pytorch]][Pytorch-url]
* [![HTML5][HTML5]][HTML5-url]
* [![CSS][CSS]][CSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Installation

**LIVE DEMO ISN'T AVAILABLE BECAUSE UNFORTUNATELY I COULDN'T GET TESSERACT TO BE INSTALLED PROPERLY ON RENDER.COM. IT DOESN'T WORK BUT THE LINK IS HERE REGARDLESS: [NOT WORKING](https://summarize-snap.onrender.com)**

**VIDEO DEMO [HERE](https://youtu.be/-disf3JseqE)**

**LOCAL VERSION WORKS FINE, BELOW IS THE INSTRUCTIONS**

To get a local copy up and running follow these simple example steps.

1. Click the green button

  ![image](https://user-images.githubusercontent.com/84189062/210023644-49f6ee47-b8aa-479d-b192-c9985ef913cd.png)
   
   
2. Download ZIP

   ![image](https://user-images.githubusercontent.com/84189062/210023664-4d06ef4a-71a7-444d-9778-bf21c8ed30ae.png)
  
  
3. Extract the file
   ```sh
   Make sure all of the files are in the same folder!!!
   ```

4. Install Tesseract manually
  
    Latest installer for window: https://github.com/UB-Mannheim/tesseract/wiki
   
    For other OS: https://tesseract-ocr.github.io/tessdoc/Installation.html
   
    Search Edit the system environment variables -> Environment Variables -> PATH -> NEW -> add the path to tesseract-ocr (usually C:\Program Files\Tesseract-OCR) -> OK
   
    In Environment Variables -> New ->  Variable name: TESSDATA_PREFIX    |    Variable value: C:\Program Files\Tesseract-OCR\tessdata -> OK

6. Open cmd -> change directory to "src" folder -> Create a virtual environment (below is for Windows)
   ```sh
   py -3 -m venv .venv
   .venv\Scripts\activate
   ```

7. Install all the dependencies
  ```sh
  pip install -r requirements.txt
  ```
  if this doesn't work, try this instead:
  ```sh
  pip install transformers torch sentencepiece pytesseract Flask Flask-Reuploaded Flask-WTF
  ```
7. Run the below command in terminal
   ```sh
   flask --app app run
   ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Duong Hoang - [LinkedIn](https://www.linkedin.com/in/hmd1311/)

Project Link: [github.com/skald1311/Summerize-Snap](https://github.com/skald1311/Summerize-Snap)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hmd1311/
[Python]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://en.wikipedia.org/wiki/HTML
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://en.wikipedia.org/wiki/CSS
[logo]: https://github.com/skald1311/Music-Visualizer/assets/84189062/97092b3b-4f77-4a86-8c4e-fdfa5b2fafe1
[Pytorch]: https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white
[Pytorch-url]: https://pytorch.org