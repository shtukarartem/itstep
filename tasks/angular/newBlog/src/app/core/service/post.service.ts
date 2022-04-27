import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) { }
  data:Post[] =
  [
    {
      id:1,
      title:"Это мой первый блог", 
      date: new Date(), 
      userId:1, 
      preview:"Первый нах", 
      text:`There’s no way to adequately express how cool I thought Will Smith was when I was a kid. So I’ll just put it this way
      If I’d had an older brother when I was growing up, Will Smith would have ruined his life.
      Every morning, as we brushed our teeth, I’d have pointed out that no matter how diligently he flossed, his smile would never be quite as dazzling as Will Smith’s was when he met Eva Mendes in Hitch.
      If his grades faltered, I’d have reminded him that in the Pursuit of Happyness, Will Smith completes a fiercely competitive, unpaid internship whilst homeless, studying for (and acing) the stockbroker’s exam, and single-handedly caring for his five-year-old son. He also teaches himself how to solve a Rubik’s cube.
      As he prepared to make his way in the world, I’d have whispered in his ear that DJ Jazzy Jeff and the Fresh Prince released their Grammy award-winning hit “Summertime” when Smith was just 22 years old. The same year he won his iconic role as the Fresh Prince of Bel-Air.
      And as he grappled with crippling self-doubt, I’d have sympathised, of course.
      But not nearly as profoundly as I did with Will Smith’s character in Seven Pounds.
      As you’re no doubt aware, Will Smith and Chris Rock are a couple of guys who’ve been up to no good.
      Chris made a joke about Jada Pinkett Smith’s shaved head (the result of her ongoing battle with alopecia) while presenting the Academy Awards. And in response, Will got up on stage, slapped Chris in the face on live television, and yelled at him to “keep my wife’s name out your f**king mouth.”
      Then he won an Oscar.
      There’s no shortage of people claiming that comedy is under attack, but I don’t think any other celebrity has taken it quite so literally. And as I was trying to make sense of it, I was struck by this quote from CNN’s post-mortem of events:
      The comediennes who were there were taking digs at Hollywood. And why do they do that? Because these are people that have power, they’ve got money, they’ve got all the things they need to exist and be comfortable in this world. And this is a moment where you make people uncomfortable.
      “This is a moment where you make people uncomfortable.”
      Really? I mean, there have been some high profile cases of comedians making people uncomfortable lately, but does anybody fail to see the difference between poking fun at a range of demographics, and targeting a specific individual? Is there any justification for making Jada Pinkett Smith, in particular, “uncomfortable”, other than “this person is richer and/or better looking than I am.”
      Is there a point, such as when Laverne Cox made the latest of countless quips about Jada’s “entanglements", whilst interviewing Will and Jada in February, or Rebel Wilson’s joke that Will’s best performance over the past year was “being okay with all his wife’s boyfriends,” where good-natured teasing turns into something else?
      Are there lines of privacy and decency that we shouldn’t cross, even when dealing with someone who has “all the things they need to be comfortable in the world”? Should we be using award ceremonies as an excuse to treat meanness as entertainment? If you repeatedly make fun of somebody’s marital or health issues right in front of them and they get mad, is it, perhaps, a little bit your fault?
      I’m conscious as I write this that there are more pressing matters in the world than one millionaire smacking another millionaire in the mouth. But in the end, this story isn’t about celebrities, it’s about how we treat each other.
      There’s been a gradual embrace of the idea that anybody more “powerful” than we are is fair game. That meanness only ever flows in one direction. That every interaction has a blameless victim and clear-cut oppressor.
      But this is hopelessly simplistic.
      Will Smith shouldn’t have hit Chris Rock. In fact, my first thought when he did it was that it must be a joke. He has every right to be angry at the way his personal life has been paraded by the media and no right whatsoever to assault anybody for it.
      Chris Rock shouldn’t have made fun of Jada Pinkett Smith’s medical condition. Especially given that his 2009 documentary, Good Hair, was inspired by his three-year-old daughter’s insecurities about her hair.
      None of us should be normalising the idea that it’s okay to be cruel to people if they’re richer and more successful than we are.
      All of these are true at the same time.
      Nobody should forfeit their humanity once their bank balance hits some unspecified number of zeroes. Fame doesn’t protect people from the insecurities and vulnerabilities that we all feel.
      Humour is always going to be subjective. It’s fine if a joke doesn’t land as expected from time to time. But personal attacks? Physical or otherwise? That’s just not cool.`, 
      img:"https://www.mts.by/local/templates/ns_mts/img/svg/logo-new.svg",
      favorite: false
    }
  ]
create(post:any){
  return this.http.post("/api/posts",
     JSON.stringify(post),
     {'headers':{'content-type':'application/json'}
    })
}
get():Observable<any>{
return this.http.get("/api/posts")
}
remove(post: Post):Observable<any>{

  let index = this.data.indexOf(post);

  return this.http.delete("/api,posts"+index);
}
addFavorite(blog:Post):void{
  let index = this.data.indexOf(blog);

  if(index !== -1){
    this.data[index].favorite = !this.data[index].favorite

  }
}
 
getById(id: number): Observable<any>{
  
  return this.http.get("/api,posts"+id);
}
}
