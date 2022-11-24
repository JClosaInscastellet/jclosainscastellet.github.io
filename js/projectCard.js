class ProjectCard{
    constructor(title,subtitle,description,videoUrl,screenShotUrl,gitHubUrl){
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.videoUrl = videoUrl;
        this.screenShotUrl = screenShotUrl;
        this.gitHubUrl = gitHubUrl;
    }
    returnDom() {
        
        return `<div class="card">
                    <div class="imgdiv"><img src="${this.screenShotUrl}"></img></div>
                    <div class="textdiv"><h1>${this.title}</h1>
                        <h2>${this.subtitle}</h2>
                        <p>${this.description}</p>
                        <div class="iconlinks"><i class="fa-brands fa-youtube"><a class="icotext" href="${this.videoUrl}">Video</a></i>
                        <i class="fa-brands fa-github"><a class="icotext" href="${this.gitHubUrl}">GitHub</a></i></div>
                    </div>
                </div>`;
    }
}