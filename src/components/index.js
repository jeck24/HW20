import React from "react";
import "../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Index() {
  return (
  <>
  <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="img/png" href="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU"/>
        <link rel="stylesheet" type="text/css" href="./CSSReset.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora&family=PT+Sans+Narrow&family=Prosto+One&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
  </head>

  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="./index.html">José Eduardo Coello Kunz</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./portfolio.html">Portfolio</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="./index.html">About</a>
          </li>
        </ul>
      </div>
    </nav>

    <container class="content">
      <section class="media jumbotron">
        <article class="media">
          <img width="150" height="150" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTizfGf5mOS2Mfs5gHIJbRRUc5u4FCk3RP7zg&usqp=CAU" class="mr-3" alt="me"/>
          <article class="media-body">
            <h1>About me <span class="badge badge-secondary">New</span></h1>
            <p>Curious Product Operations Lead with 7+ years experience. MBA graduate & engineering background. Launched multiple cities while working for operations @ DiDi and worked as Equity Research analyst during my early career. Looking for the correct questions to understand what the users need.</p>
            <a href="https://github.com/jeck24" class="fa fa-github" target="_blank" rel="noreferrer"> </a>
            <a href="http://www.linkedin.com/in/josé-eduardo-coello-kunz-926b584b" class="fa fa-linkedin" target="_blank" rel="noreferrer">  </a>
            <a href="https://www.instagram.com/jecoello/" class="fa fa-instagram" target="_blank" rel="noreferrer">  </a>
          </article>
        </article>
      </section>
      
      <section class="experience jumbotron">

        <header>
          <h2>Work Experience</h2>
        </header>

        <article class="didi media">

          <img width="150" height="150" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6N2lB0embtYs2dMJC40eTlEUHEKjgXmjmKQ&usqp=CAU" class="mr-3" alt="didiimage"/>

          <summary class="media-body">

            <h3>DiDi</h3>

            <summary class="productOps">
              <h4>Operations Senior Manager - Product Operations Lead</h4>
              <ul>
                <li>
                  Structured & led a top performing and multinational product team of 9 employees to develop and launch tenths of product ideas, and debug issues to unblock the product/market fit of all DiDi's platforms in Mexico.
                </li>
                <li>
                  Led the launch of DiDi Hero, DiDi Prevent, DiDi Economy, among other product features, translating into millions worth of ad-value, and significant strong increase in user frequency, retention, and top of mind.
                </li>
                <li>
                  Led the outline, design, development, and launch for Mexico's tax regulation product that was stagnant for months and successfully complied with the government on time.
                </li>
                <li>
                  Managed weekly status reports for leadership about due diligence, market analysis, and various strategies about the successful test and launch of tenths of new features.
                </li>
                <li>
                  Established several A/B tests that assisted the company to localize the product. These were based on user behavior and ROI.
                </li>
                <li>
                  Reshaped the PRD structure & product roadmap, and prioritized feature lists to enable more rapid development and launch of critical MVPs. The previous significantly improved supply hours, calls, CPO, UX, among other metrics.
                </li>
                <li>
                  Launched internal tech-talks to incentivize data driven innovation and improve transparency to all stakeholders and improve productivity & product quality.
                </li>
                <li>
                  Led the creation of new project dashboards using SQL, Python, among others across more than 10 projects to enable data driven decision making.
                </li>
              </ul>
            </summary>
            <summary class="food">
              <h4>Operations Senior Manager - Supply Side Lead</h4>
              <ul>
                <li>
                  Built & led a team of 4 employees to develop due diligence, market intel, and various strategies for the successful launch of the food business in Monterrey.
                </li>
                <li>
                  Demonstrated positive team building skills. Hired and developed tenths of new members at healthy ENPS.
                </li>
                <li>
                  Designed new dashboards for the immediate monitor of operational metrics. This translated into data-driven decision making.
                </li>
                <li>
                  Created a predictive model to forecast burn, which demonstrated to be accurate 95% of the times.
                </li>
                <li>
                  Managed weekly status reports for leadership about the several strategies that assisted the company to exceed weekly orders, completion rate, and budget goals. The previous were based on AB tests, user behaviors, and ROI analysis.
                </li>
                <li>
                  Developed a launch playbook that simplified strategies, best practices, and learnings for future knowledge sharing.
                </li>
              </ul>
            </summary>
  
            <summary class="drveng">
              <h4>Operations Manager - Driver Engagement Manager</h4>
              <ul>
                <li>
                  Successfully developed, managed, and trained a top performing team that exceeded company goals.
                </li>
                <li>
                  Used background in finance to review historical analysis and facilitate business efficiency by creating from scratch multiple operation models and forecasters which proved correct estimates 95% of the times.
                </li>
                <li>
                  Senior member of the launch team that developed due diligence, market intel, and various strategies for the successful launch of 4 cities with a total population of 7.9mn people. These included the most efficient and the most successful launches in Mexico.
                </li>
                <li>
                  Established several strategies that assisted the company to exceed weekly trips and completion rate goals for more than 9 cities in Mexico. These strategies included a loyalty program that translated into higher income for the company.
                </li>
                <li>
                  Effectively conducted numerous AB tests to improve efficiency and surpass goals. These include improving the performance of 2 other cities (not launched by my team) with a total population of 2mn people.
                </li>
                <li>
                  Developed a launch playbook that simplified strategies, best practices, and learnings for future knowledge sharing.
                </li>
                <li>
                  Launched multiple internal cross-region and cross-functional workshops share best practices, learnings, and other knowledge management.
                </li>
                <li>
                  Responsible for 50+ sessions with drivers to further understand markets, necessities, among other important topics.
                </li>
              </ul>
            </summary>

          </summary>
        </article>

        <article class="bx+ media">

          <img width="150" height="150" src="https://media.glassdoor.com/sqll/2487929/grupo-financiero-ve-por-m%C3%A1s-squarelogo-1554080414611.png" class="mr-3" alt="bx+"/>

          <summary class="media-body">

            <h3>BX+</h3>

            <summary class="analyst">
              <h4>Equity Research Analyst</h4>
              <ul>
                <li>
                  Recognized as top analyst by Bloomberg for 2 stocks as estimates outperformed peers by over 10%.
                </li>
                <li>
                  Acknowledged as a subject matter expert, interviewed and quoted regularly in national press and internal repots.
                </li>
                <li>
                  Constructed over 50 comprehensive valuation models using DCF, RI, and value-add fundamental analysis to generate recommendations, determine viability, and rebalance a portfolio of $3M to ensure first class returns.
                </li>
                <li>
                  Created and maintained daily & weekly dashboards tracking seasonality and performance of hundredths of public companies.
                </li>
                <li>
                  Improved efficiency by over 50% by using entrepreneurial approaches to custom made databases.
                </li>
                <li>
                  Authored over 60 equity research reports, including briefs, event-driven updates, initiations, PT and rating changes, and others for more than 5,000 clients.
                </li>
                <li>
                  Hosted and mediated forums to over 300 guests’ audiences cultivating strong relationships with stakeholders.
                </li>
              </ul>
            </summary>


          </summary>
        </article>

        <article class="8w media">

          <img width="150" height="150" src="https://pbs.twimg.com/profile_images/1042786734755393536/BAh6vFqO_400x400.jpg" class="mr-3" alt="8wimage"/>

          <summary class="media-body">

            <h3>The 8W</h3>

            <summary class="finance">
              <h4>Finance Manager</h4>
              <ul>
                <li>
                  Senior member of the project management team that launched multiple facilities.
                </li>
                <li>
                  Constructed accounting systems and financial projections for several units to the track and double sales and company’s domestic presence
                </li>
                <li>
                  Built a database with providers including invoices and checkbooks for the company to improve its decision-making capacity
                </li>
                <li>
                  Managed and molded processes to generate sales reports. Furthermore, collaborated with an external programming team to plan and establish an ERP system
                </li>
              </ul>
            </summary>


          </summary>
        </article>

        <article class="mobbily media">

          <img width="150" height="150" src="https://media-exp1.licdn.com/dms/image/C510BAQHZPfgOEqBV5w/company-logo_100_100/0?e=1610582400&v=beta&t=7lNtTkkdrUfOVrWWopiCCWvpWUG6kQAT6OpjDV0V3yw" class="mr-3" alt="mobbilyimage"/>

          <summary class="media-body">

            <h3>mobbily</h3>

            <summary class="cofounder">
              <h4>CoFounder</h4>
              <ul>
                <li>
                  Developed a web-based system to change how high-density cities manage transacting movables
                </li>
                <li>
                  Designed a initial prototype which allowed a safe and convenient environment to facilitate buying and selling of furniture; it alleviated client concerns by transporting the movables and taking complete payment process control
                </li>
                <li>
                  Led a project with 2 engineers and 1 designer through multiple pivots, redefining the strategy and vision for the product
                </li>
              </ul>
            </summary>


          </summary>
        </article>

        <article class="ubs media">

          <img width="150" height="150" src="https://www.temenos.com/wp-content/uploads/2019/06/client-ubs-square-image-19-jun-27-400x400.jpg" class="mr-3" alt="ubsimage"/>

          <summary class="media-body">

            <h3>UBS</h3>

            <summary class="equity">
              <h4>Equity Research Associate</h4>
              <ul>
                <li>
                  Built from scratch credit tracking and economic databases for Latin American in order to analyze financial statements and trends to get accurate recommendations for clients and portfolio managers
                </li>
                <li>
                  Created investor presentations used to pitch ideas to present and potential clients
                </li>
                <li>
                  Collected information on publicly traded companies and performed extended fundamental analysis in client requests, research reports, and other requirements on around 25 stocks of diverse sectors
                </li>
                <li>
                  Drafted 2 company initiations giving constant pro-active research ideas for a better final product
                </li>
                <li>
                  Managed a full-time position while maintaining complete bachelor course load achieving peak performance
                </li>
              </ul>
            </summary>


          </summary>
        </article>
      </section>

      <section class="education jumbotron">
        <header>
          <h2>Education</h2>
        </header>

        <article class="hku media">

          <img width="150" height="150" src="https://universitas21.com/sites/default/files/styles/scale_640_w/public/2018-03/HKU%20ColorRBG.jpg?itok=2fgYVBva" class="mr-3" alt="hkuimage"/>

          <summary class="media-body">

            <h3>The University of Hong Kong</h3>

            <h4>MBA</h4>

          </summary>
        </article>

        <article class="lbs media">

          <img width="150" height="150" src="data:image/png;base64,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" class="mr-3" alt="lbsimage"/>

          <summary class="media-body">

            <h3>London Business School</h3>

            <h4>London Track Programme, MBA</h4>

          </summary>
        </article>

        <article class="bachelor media">

          <img width="150" height="150" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///8AM6AAMZ8AL58ALZ4AJp0AFZkAK54AH5sAKJ2KmMkAGpoAI5wAIpsAF5kAHpsAEJgAAJWostf4+v3i5vK3wN5HYLHq7fbw8/lacLgADJjQ1unV2+xpfL2irtWtt9nIz+a+xuF0hcE/Wa6Uoc4pSaiFlMiaptFMZLN6isNidrrc4e+7w+ADOaNXbbYaQKUzUastTKk5Va0SPqVWtv/QAAAYqklEQVR4nO1dCXPiOgwmdk5ykwBpuCk35Wj5///tWXYOOwmkXbqBfYNmdrYkJviLZUmWZLnVetGLXvSiF73oRS960Yte9H+hYDhpj3oHJ6bk6cvNfPGxf3SvfovCyeiimrqiyQhJkkT/YdlQdMf8Ws2iR3fvXppuD6qtYSkjJMn537LieufFPzyWw61iGhw6IHd4NoQLsqUuF//mSHaWqoGkIjn91pdWuIYt7zh9dHd/SkHb1nEJHiEvaLUO/B32EjRnOXl0n39CQdu0ysNH8RzI7dDjLyTzEruH7qP7/W0a21fwkbEaQYO2ks/L/TIVPdhcTh/c8+/R4KRfw0cAzaBJYKYtkNPqZx8k7L39AzJnHlfOvwSQxhqNUmGDv8iQ69wYm53Hdr+WBkiphJaQvWbNJnZ6YdwSJQ8yN089jO1bA5gPYWvqJhdUgDO2+EaaPn0ggtsU9PQqXDmpqbQcmuyCsoVPkSe0QnH7gSBuUSgVVXmBlLe0aTKGSA/ox0vR8Dk+DMQtmjo3OZRIlUPWds340km0/EYuNFWWTzgZu/F1HcEGzAmzxj0KydgkH99Kg6+h/mNgXKdJLUBvkDVmRg3WguRzaQyJQa6E1T/0KJrEt/EJAFsjWF6geJh+Ls5Div+5IHZ/BHBIh9DLTO2+V/UVbDwRo05rWVTlALZOMGROrhIy/S+SfAjKP/UYCp1aIcMD3IHZ427zC58YREv5a9q5cSjVFKAaNYGcIdd8C7pQ3+UXpg4BMz9VQLR2pR97CPVqFD1SBYBmAWBrSV6QN1wZFV91xk2DqaJ2jamGzRJAlwfYJrNQ22SmqkjxsPhzzdOgRoxik/elMYBz/vseSNqwFTiV35aaxlOmmkkoApzDQJk8wBCWyyYsqpaVD1JGDeMp0fzmelDCOq+3R8DQJidFW33wpTLrjTPdMAfWmzaKp0Q1PIoVXmuPYAQdEaAMnEj13jwTNfidEzsYN4uoSKebPCqLAPVKgEhlw7zNUDmzdP0IZK0aRVSg8U05iuXSCKr84pYClOJpcj/lUu291eJ9yd4DrbfgqteQjiDiF3lXAabm6TlhB+T0xfWU9tZ6GLWtKmTXAXoL7goD6GU6PX1bKkBe8ALMe5hSzN2eFaRJZYBr7goDqGaYB8nUs6ku6fLsr21aD6LFjSHULj8DmAoamIStVsHC8R4VgFOuD2EFwJi3MUsAE36QmeZoDQSE2oMs8Ml1QSoC3EHDmI8tJXOQm5YrOvGwlcjND/HZ3mMcU9VmFgV44teuVwFyXNtXafQ7W4WITmJJ4UVUYzRUvwfwTQefDB85S9QEz7VnuILibKG8E1dk6CEG+LZqQVcB0P4GwDn4MRBnghanuDltNU8VIeyfAORjTGuVjuAsu/BRXCwaD1hiTM0KdABwWQY4464ULBkg6opEHtfqXHSgIusvw6mgK0wqjuCxDFDB1QBT8xSoW357D2DTKi8u0WcCwI1VBBhauMi1DCDvbgwqFK3S+AqjXylJscwrLgpQnXJXvgWw0rWFl38VTgVVenGRyptXDCDf9WsARWfVvNJBrDat9OdV01Dlp9e7UnDmt/aQYiNIlNa4DLBdLcJ0/mtNUNXi3uAWcsGXAl0XAJpYVHpETUDEAlu8L2dxxZBQGg4MV/n+0oguvf9pgBuKZ9qhiwsi8yrAKhdz00uoYQUr6ZyVwgDyXR+A5SnKHQpQNsoAR+V4ooQa9kh1y+sKhPLb7wQgcvmuTz1UlDsLClDw5bSpcaNXGvUNi5pF2U1q5UO4Aykq+B5mFKAgd+hwic6qFeV9wsjHCj41m/VljMpdULNZuIaOerxOoEF+MQRFAYq+HAYQPDdVBpPbrDAtR961LENkDxrA5v2iHQaQlzuUH2XBlzOnc5suiytYhOeRJqisLOwOf0/mg5t0wmEB4KoCoJsBrETYsLooO0qzabKGFa/KTS+KRtQclB+1g+DLobIrZuv+VQVCg+eKv09ldZhOQ+pSsjmvAw2oiZqDASy7OlC6atxVSJqG3VElwyNLygMXI684VmWAFHMlwFQ6VWkLrdlUsDLC1JMCKQd6bp8ykanxAOdlgEfmxUilZVRluTVs1FxFOCPdR0bWjibayBqv9ChAY1kGmNs7FfbEEyB0k/4b/Gp1CGoCiwBBZBqf/MN64DrkrfRehdX2cIRSIj0h3zfT7AHsJ0Emz6I7BpAfwR4ITl7WVvspGw5BlWMyzOSAGZQJHbZYF1YTVKIoZx4grCPFRL33qiFM0vwbI7mEkLEmrDnklJ3WMF4u765mAN/5J50pQN487VQvgRv21JxL4hxf4PrMzbsSgrWt8XDeKgCCBSpE4kK12hHbsGd/U1bJNHcNEFpJPOJdKxg3O/sKQF5zBPhKOMRudp9ChfFPbQ6KkHXlAwwX3rihdpnxxT2FegIKcmd5LYfMnTaAK6d1RXDUC1lkM2EnMMB544Z6mAR/anACNAqPuXW+Fg2RnGYzamcVWWigsEIycAadhx80Qy/nLKr7kcFNuOigVXNtNZnNZpuGVSpL/WgFKiT8QAsQ+ZxxQ8WOkHMQUYeTwuvxYHkdID41hS2hqt1bSAlA4yN42zSzmVvS0Z0/vOZIWFQEeCOPs2F1SIaoSuJpPerecD+SIK6XTR2a/ob5ZTFFI2QB3wTY9BJf2ELIkb7qEo0g91jKTx5rmLLcdW4RTE01YVoGl5uZuIJzuQmqEjUAcQ7dVIc0NJUzKQ1U8UtYFpvg/d81AJHTIDjWoSvOd9pN/NVyEafBWPobF7YZ02/zgV0mWK+T3HzWUOVEzIZyTYcy5UEaD+Rm4ZDmbCI359EIV1rbOTU+Dat1vjiU2RpjTVnSypNLJPp2rFyy9q+Zahmpze+gCSs3uvCUCRoGKBcVIyqlUK7Co1qAjWtDoM+6XqVTJ8lpyHziTLBKRp7ufalh0QelDN1mUyl3O7AIANIzPOzV5GNaKrJQJu8R27yiOjbFicXJ8g6yWZnkFeeId3WvKn9Uw1TlthW6RdfErSHzHiM7+VqywylzLK0rN1qI5D6m3MLgamIbo8T9Nk4SD5J52Ek8hak5MKzb2CcJFnyzVCdrWCwmzWlIAhupOztdsh/qBJYk6JVmqSJ1SewY1dKpw4Ppw8xTqDPG29ZPQl6vNE23d1vQkhD5SLOAWxY3s6nnf/8NHn1APlRGHzVCgi4mpHQlSe3SzNhjA1y3sw/ogUNY5VQUiK4mDilCamhnK2caDhzUGkaS6M1qnOp6CKkJX5nBQtR2HlWidlhVRkKRMKrtxt+k3XXHCu2dFHDbX8jKmMvDIUxbazTQdk2ne4kU3Ki2A6T1+Ji8OdnnCAkLd6o3cYtPeNh2koQmNWrf2k3zYCAyuQ+SN6zIWSkSMh9eIeN4m08l5YsbZXziO39a1uxyl/LiIA+k4FpGe4ZKGBLhQz1A4xnquIjbSJFyJwkskWwvfTQtOOMNLRftO4mbm+hhW7oKxC/w7o4Q8VEt72lq1J3z9y6mev+c1pxsNp+nXlTAOVrElN+fEl/nRn/4VnyOeHfnPRB5gPYziNGc+gYH0f3TEMPCe1qABCLi5mK8rv9CBb1xQll/NoCEUU+cEPyT0oADiX/AM83BjN45O1ozfziM0cjLjR/kPY8UFWjOZcIg/fADizJoO9wA4ufRg0XqcONABI40/p7NFW5NfreaIT2JJVNF+wsfGsaWupvVgYw6Xx5vvCP17Sls0askFmhFmuscO1eHJBgszp4tLD60J1gu1dD0YItLJM12rE27W9gPEgwm20/TVMSoE1afuz5rQgu1uChGsqL7Yg2Wjm8buLA+RDZ6rE/m29QfeRVbakSE5R2aSDEf6Tb8Ie2PXnHpX4MQWebquSVMkcKRauFvI5RdbfFv4QOK1heHG8jrCLHlvT+tiq+hwVZzFHwLIdIsb7l4ojKeP6dB+6y6iobKCBHWLNPcjJ+qEOufUTBdvB3UkrZwl6PxE1RF/DUKhqIk6Yf/nmR50Yte9KIXvehFL3rRi170bPRPL3nrKBh25hdfvBYOHwJ5VkH3r8e3vmcbWKiCOPMd/4YfMfxb6CPfdR0vjmOXkEr+V13Xv39rTn+6kQt1Hnfardy1o+/Pr9+9qyuq5H6O5tuVDOUMVtv50cW/svloaIoIAwcb19f7H54k+X/H2RE6yTF2Fkrq3UXZwXB3PlhE2NXjG3H/jitJzvQXfrZMA6/H/rBRmnU+iX8j4bqI8KjeCvgGiq0fbty/g6Z+EubKEQbeb0TXCwgj//Z+mGjxt7zhH3ES58oRtt5/I5u1iHD1KOUYpJqBQxj9RmeKXPp44hASCtZLU+HDDNG4pxnSnGKPpistagWrg7Lka3W3Px0X7T6SjwLCcLX0Y+PIPW8wP6juctUPwsEHaMlgsF7mkuhjJBnaJo0yTo466czd5yULCGeWv1spmpqx68r3PUfDihq1NifVVeJgqrgYYTNvEauf661pmMuwhHAbO5/jlW6YpzQSvov182SuKo6qmt47eaZjWlkxwhnyY9VCGhMRM9k0V4uTbd17dimPcBzDMZR9E1ksZal/8udRMDw6yN+35pDzq839U88lOtRJfvZdp0W6QgXJ7FAdDuGXTXV9X0ZyUm3hy6IFpxaWhE4Gjlpz2BaV7lQc+adhq78wMT22ZB2zGvVH7d70Gw7hLGYlxbYG22jeVxSGdOLD/5CILy+HULMESzIrBfVmIYdyUddNjgPMEb4pSbxmRu5ZcG/sJrtFFZTssQ3MDOHR1emTQsnsQ1+SbTewXSBOp8CdCAMbsVpJM51tgDnJaalANhXUdA8elDihf83UrM6ahtiRMRlCci/dSCshdiTpCScpuEct1fMYJQjbbrb/KaDvIN0rTt43kn8H4cImby+IoqhjsYN8XbFsKuzRZ78amclfXzjbwz3XGLIM4bucbe+FTrrsAYyVyQW29Qs2FVGE/Vjicx47erb7GV6nec8g5gjJG0Ze7Pt+rJvxDvZoi3UAcoRBghA2xaQsDpUyoA5RihDuJSjo1hJzSkyKNI2aINRFhCtFCEFutIwBoPC2cY91niGMVAkdRqN5e9zpDsib3qtSHUJ4vXryeglr016nCOHYlfQebDSBLZdErrDJ9aZJcSggXGKhCi1h3qwKhclKcdyPkHRN2BYP8kF48G2EgAhQpAjpvW5+D6At9GTTooHSY1hThLoQRg5clBdSJDNcvueoRB6h5HA2YlcvGCfVCFNOpGPWFRGmW2Vhwxflyi8b6WTebhUlLf2ZIARIfBVa0is5NWgxuq9sZIYQ+J3/ETrDpzcRwj7uVAJS+brPEe7VvCYpHCvDKvVtsRYjOfZG6atMx5DITr4IzwXn+9/Jrbu2meaShjyJ3xgPogILpbtKCIG30q9MbFaxOpOlBrmX1E8EdlDoX3tjN161u/mMSxFCXV+uOAbsn064lkrg6R0I9QwhPFVPzIfOgO1hthIhNplWItwqWYmTtiLZ7QQhRQPnYSWdJPeorgzaarGodYpw4sIOf3YzbNNN7onLgbA4vmcJCd1OplIIlSzd4yCIpkd/nWyltz5nQTDYwWeKsC8gJEZCykFLjKlezm0aDads+ompJ6PvK0RCDsM9oRSolmp8KDYhW2tiki/iJT2vNcG1tqT4now/KH+RMhotoq65quoy79ACCnjJOjGSfegpyAu26z4kfzH9PPCJlIe/uiZm22kgV8ih72GoyhItWkrusVkI5Yk103FM0/ROVApBeXtW4m4PCcjIclTHucAkXSqSAr0IZHyHXTo7HlSDkK1uqPJZ+5DHhYx0u8E6VrLPszdd02AhRdj5YJA/lR0gGkqu5qwmK888wSzqbhxopY0A2f7iaup2sk3ugX2bp4lhb9sKR/RJzhEw7iUdClJidcOk0Jun6ZvJ+OCqd6wtPkbzlJh6Deea5xnzTDH1t5Lq6SPoX2fzBnQk49070j97zMrq9FyyxOoxTl8krTbs42Sj+L66yVZn3QvSdNd1LUjf9MN98qQNY/Tx2fHUr8xAG4xkYmCd2r+ddBtEtz9/5zvX77Xjt+50Ou0czcpakEEU3Pz89BSdvbRq90R/RG2ov019Xcuq1hDZ2XAl/Sbozcgr9LaWsn6j6T9KZDWZFa/vO+r/j0nhAGssMb0RnNUGNnftG89NPhhE3e0ms+7W9P9yyZZpZ9Wz4q/6hr9LwTG2NMv0fL/3t5Nrfd+W0e2F87RDaSpeHVRe/T7tF6Neb95EanS/h2tcAyvfd21bV8SrB922iQnT7FkUf0Ydu9b5sYcqSrqwEwsODsCXn41A8CCz5EOvd++A+0w88g3K7fzwuJRQ+4246x/QdxBOYGcdf0jVAJZT1o96PFH1B+m9byF037HgBHpTVpqk/ARhO0aPMj+/xaUxzLs4m3ahv1ooP+PSo/YYAzschl1R0vT3+7JAWPjBu8z5m+d+f1VAGO73YlgVXkewz7aV7rS0Sn36y/tC4yjTjAE8aRhVN/0Jzd5isiq1eEfy7EzWsOq8iHHrB2SRg9LKpFG8Aed77tnrby2yRPWWCYRgMH6DVICV6iSTb7w8IAmdzp8nZj6NMWluMC7vz1ZLH96iigmyaLA++pPWUFaT/IKs6fCztyHUO09b0RL+/Krhof6X6o8mC1nmEO5i1J19yopUWMju4gBccWlZw4U/BYRGinAcW4fZcGHK7hK+uPJNSzO2IQLXB6270PfpoZaaZfuwUIqW8ft0otHo6sCPXQU79GwvZd6S4bt6N/QwqwpNmvZo02MrWkiKLGvGqg8BakNWR7eLVgxUjZYPC5a5xu/ZUNM4UJBW8J0fXRoxSZc81oV+TN28K4/VQoYIGwJP2lgjyJb+ZrwCiOysbY5L+7ICzx84krtqBTM4bEaZ+goGhANwS1qTi61JyIRKI7QcPzSFAZOQhFkQoO84NYvK0EPJNMolzchmQbCtITliEOsTs3rCLmWcjt+hns9kXs7idEYSacKiEOQJ+ATTCgIEzFR4yyXNSWNuwyVGkAdCC59d3hcnl4oyCHydtMVRhRy4pcZ8c6QpvKixnZYe/FDrpGMe4ckQDmOJnYUzsYtHK9NADZE1TOtf4EcWGUKULfagujmNxS+yASbA2HTNEa715ESluUZd0FCejwbB11RUQTqcS/7qzuB4F8RcpeSVQfFWOCeMvbAdmSg3qWtmjvYMIXRmNvvodkcaKqTYudC2m+Rlzeh6h4whO9QH9IjKmgVpgC8f4HaKNUeoIfw+hd/5wjQ6Awi5Y4Y2eTy1JdOmXdrUBR6fGyzQF6h1h+oSfkrDHylCeD9EbEFc1NE1wfsVeNRTbCD6rr/oDsO1lZgAcy72fMGs5G6OcFFCOIAgDv0dz7Qve4aQKzVPEGaxuGJTWhUVeK/r19UrIEZXKidShEOHDOtk8jHYh0WXYD+mWOCgOy8c0mQFQMiGngiKpJAwLelJCyPfQkhsXG3X7c4GYZ8pn+sIybQTm9LZBb7HY231/VgqIRyYV89T3vsjBhTOJRmxc50IQhYDOMtpOInNoTqE5IuGsKy/jpA0LdpNY/qzUf2qLc6PxuIQCnFRjqYx6y7EoGRtmf66nJ1RonIIpXqEYkT5JsKiQQmRPi/q+LXrNhdldZdThBDI1KsdNhMv0Qv0SJlJ+uvsiAAIxaW5KGCfv9UghGQFIbJ2HWGpaYvZt52v+mg+lOhO/LCZLIVAZnVV+4WTWKQYZRyZIfzg3PJE0tAXcAshDQnzyug6wr1XTr74cIm6/Eap06ma1Sqc6UmmBVgTSYHGoCcM5iitqMYtKAAhEzDkQUlUDpI4KGdUI0xmPpTBTipjhJf+LYS0qbPOmwJZZCCkVj31CG/JlwFU79CS05oiqI1kSItZd6uLGdeX1IqLPOQlPwRFAU32tvx0dUxMBRbCBGXJXkr2FygVOIslAhuI8Pp5PJvsfAgQgt2Tn8ALJYvtFGGxafLD3yr7HRzguGkTX3woxInNyxRUOZjHiq7bQkJ2RAbXZvZG681OclsGEOFTtnSSjH2M5JCe7cCS/CHdLZHLYAjRw60+gGuUnvIJSw6It1qu7dI8jLXCR59CHRIuUsB500s6HwcO+t6pz8HRMzC2zMlMtVXrfQSyYopdTZYN9ZOXVO++ats2WWfBr04Z9rXv6+Si7SVXD6biHd889TCFux745mzXXxPsJvlL92Gev5uyrPg0mDr2bE3GSrwL4PXENn0+zfbrxz58cvzUME6bchP3pHzXST6Yf55WQetjN8kBTUbvXyNxGneZY7TDTC7WdDjuCFdbs23v/DVPvpjcHA+ydlT8jnvnbfJL0fr49b6lAngw5p8UZZ/SRS9tuuKXwCO/6dOEmqbTI44xaZKmv7Ch57np5P1j8e6f0shs9sjnpina2P/DkDhHe09DSn2zf5jWbvOHBzZLkab7/2smhZ08/3dV8aIXvehFL3rRi170ohc9O/0HUxXS/Anx8ToAAAAASUVORK5CYII=" class="mr-3" alt="tecimage"/>

          <summary class="media-body">

            <h3>Instituto Tecnológico y de Estudios Superiores de Monterrey, ITESM</h3>

            <h4>Business & IT Engineering</h4>

          </summary>
        </article>

        <article class="other media">

          <img width="150" height="150" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-XAMcEthozttlMuqcMwWYxA3TXxH1ekV53Q&usqp=CAU" class="mr-3" alt="otherimage"/>

          <summary class="media-body">

            <h3>Other courses</h3>
            <h4>Instituto Tecnológico y de Estudios Superiores de Monterrey, ITESM</h4>
            <p>Coding Bootcamp (ongoing)</p>
            <h4>Columbia Engineering</h4>
            <p>Applied Data Science</p>
            <h4>Beijing Language & Culture University</h4>
            <p>Mandarin Intensive Course</p>
            <h4>Johan Cruyff Institute</h4>
            <p>Master in Football Business</p>

          </summary>
        </article>
      </section>

    </container>
  </>
  );
}
export default Index;