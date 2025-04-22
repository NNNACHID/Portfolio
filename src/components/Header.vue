<template>
    <header class=" bg-finally p-7 mb-7 rounded-lg">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="flex flex-col mb-3 md:flex-row items-center">
                <div class="m-3"><img
                        src="../assets/photos/nicolas_check.png"
                        alt="profile.jpg" width="150" height="150" class="header__photo-img"></div>
                <div class="flex flex-col text-center">
                    <h4 class="title titl--h4"> Nicolas <span class="weight--400"> Nachid </span></h4>
                    <div class="status"> DevOps & Fullstack developer </div>
                    <ul class="header__social">
                        <li><a target="_blank" rel="noopener" href=""
                                title="linkedIn"><em class="font-icon icon-linkedin1"></em></a></li>
                        <li><a target="_blank" rel="noopener" href="" title="Github"><em
                                    class="font-icon icon-github1"></em></a></li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col border-t-1 border-t-tertiary-900 md:flex-row border-t-transparent border-l-1 border-l-tertiary-900 p-12">
                <ul class="mr-18 ">
                    <li><span class="overhead"> Email: </span><a href="mailto:n.n.nachid@protonmail.com" target="_blank"
                            rel="noopener" title="Email"> n.n.nachid@protonmail.com <em class="font-icon icon-mail"></em></a>
                    </li>
                    <li><span class="overhead"> Location: </span> Annemasse, France<em class="font-icon icon-compass"></em></li>
                </ul>
                <ul class="mr-18">
                    <li><span class="overhead"> CV </span><a target="_blank" rel="noopener"
                            href="#" title="CV"> Download <em
                                class="font-icon icon-download"></em></a></li>
                    <li><span class="overhead"> Status </span> 🍉 </li>
                </ul>
            </div>
        </div>
    </header>
</template>