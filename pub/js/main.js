"use strict";var course=document.getElementById("course-items"),submit=document.getElementById("mysubmit"),url="http://localhost/moment-5_1/read.php/course";function deletePost(e){fetch(url+"/"+e,{method:"DELETE"}).then(function(e){return e.json()}).then(function(e){e&&location.reload()})}function doCheck(){for(var e=!0,t=document.getElementsByTagName("input"),n=0;n<t.length;n++)if("text"==t[n].type&&""==t[n].value){e=!1;break}document.getElementById("mysubmit").disabled=!e,document.getElementById("mysubmit").style.cursor="pointer"}fetch(url).then(function(e){return e.json()}).then(function(e){e.message&&(course.innerHTML='<tr><td colspan="4" class="nothing"><em class="nothing">0 kurser hittades</em></td></tr>');for(var t=e,n=0;n<t.length;n++){var o="";o=t[n].courseplan?'<a href="'.concat(t[n].courseplan,'" target="_blank" title="').concat(t[n].name,'">Webblänk</a>'):"<em>Saknas</em>",course.innerHTML+="\n            <tr>\n                <td>".concat(t[n].code,"</td>\n                <td>").concat(t[n].name,"</td>\n                <td>").concat(t[n].progression,"</td>\n                <td>").concat(o,'</td>\n                <td><a onclick="deletePost(').concat(t[n].id,')" class="delete" title="Radera ').concat(t[n].name,'">X</a> <a onclick="changePost(').concat(t[n].id,')" class="delete" title="Ändra ').concat(t[n].name,'">Y</a></td>\n            </tr>')}}),submit.addEventListener("click",function(){var e=document.getElementById("courseCode").value,t={name:document.getElementById("courseName").value,code:e,progression:document.getElementById("courseProg").value,courseplan:document.getElementById("coursePlan").value};fetch(url,{method:"POST",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){e&&location.reload()})}),window.onload=function(){var e=document.getElementsByTagName("input");submit.disabled=!0;for(var t=0;t<e.length;t++)"text"==e[t].type?(e[t].onkeyup=doCheck,e[t].onblur=doCheck,e[t].value=""):"url"==e[t].type&&(e[t].value="")};