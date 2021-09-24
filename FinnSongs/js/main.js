var db3 = new PouchDB('http://groeben.duckdns.org:35984/songs3');
var db=db4 = new PouchDB('http://groeben.duckdns.org:35984/songs4');
var db3n = new PouchDB('http://groeben.duckdns.org:35984/songs3new');

var grid, lpanel;


$(function () {
    showSongs();
})

function showSongs(){
    lpanel = $('#lpanel').dxLoadPanel({
        visible: false,
    }).dxLoadPanel("instance");
    lpanel.show();
    db.query("plays/test3", { group_level: 2, limit: 1000 }).then(r => {
        grid = $('#id_grid').dxDataGrid({
            columns:[
                {
                    dataField:'search',
                    cellTemplate:function(c,o){$(o.value).appendTo(c)}
                },
                "artist","title", "played"
            ],
            height: "50%",
            pager:{showInfo:true},
            dataSource: r.rows.map(row => ({
                search:`<a href="http://google.com/search?q=${row.key[0]}+${row.key[1]}">Search</a>`,
                artist: row.key[0], title: row.key[1], played:row.value
            })),
        }).dxDataGrid("instance");
        lpanel.hide();
    });
}

function showPlays(){
    lpanel = $('#lpanel').dxLoadPanel({
        visible: false,
    }).dxLoadPanel("instance");
    lpanel.show();
    db.query("plays/test3", { group_level: 4, limit: 1000 }).then(r => {
        grid = $('#id_grid').dxDataGrid({
            columns:[
                {
                    dataField:'search',
                    cellTemplate:function(c,o){$(o.value).appendTo(c)}
                },
                "artist","title","year","month","played"
            ],
            height: "50%",
            pager:{showInfo:true},
            dataSource: r.rows.map(row => ({
                search:`<a href="http://google.com/search?q=${row.key[0]}+${row.key[1]}">Search</a>`,
                artist: row.key[0], title: row.key[1], year: row.key[2], month: row.key[3], played: row.value
            })),
        }).dxDataGrid("instance");
        lpanel.hide();
    });
}