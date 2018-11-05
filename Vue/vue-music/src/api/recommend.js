import jsonp from '../common/js/jsonp'
import {commonParams,options} from '../api/config'


export function getRecommend()
{
	const url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
	const data=Object.assign({},commonParams,
	{
		platform:'h5',
		uin:0,
		needNewCode:1,
	});

	return jsonp(url,data,options);
}

export function getDiscList()
{
	const url='https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom8627935931029684&g_tk=71802849&jsonpCallback=recom8627935931029684&loginUin=630028691&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A71%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A71%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%7D';

	const data=Object.assign({},commonParams,
	{
		platform:'yqq',
		hostUin: 0,
		notice: 0,
		needNewCode: 0,
	});

	return jsonp(url,data,options);
}