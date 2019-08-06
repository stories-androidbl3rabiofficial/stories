//<![CDATA[
      var initDemo = function () {
        var header = document.getElementById("header");
        var skin = location.href.split('skin=')[1];

        if (!skin) {
          skin = 'Snapgram';
        }

        if (skin.indexOf('#') !== -1) {
          skin = skin.split('#')[0];
        }

        var skins = {
          'Snapgram': {
            'avatars': true,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': true
          },

          'VemDeZAP': {
            'avatars': false,
            'list': true,
            'autoFullScreen': false,
            'cubeEffect': false
          },

          'FaceSnap': {
            'avatars': true,
            'list': false,
            'autoFullScreen': true,
            'cubeEffect': false
          },

          'Snapssenger': {
            'avatars': false,
            'list': false,
            'autoFullScreen': false,
            'cubeEffect': false
          }
        };

        var timeIndex = 0;
        var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
        var timestamp = function () {
          var now = new Date();
          var shift = shifts[timeIndex++] || 0;
          var date = new Date(now - shift * 1000);

          return date.getTime() / 1000;
        };

        var stories = new Zuck('stories', {
          backNative: true,
          previousTap: true,
          autoFullScreen: skins[skin]['autoFullScreen'],
          skin: skin,
          avatars: skins[skin]['avatars'],
          list: skins[skin]['list'],
          cubeEffect: skins[skin]['cubeEffect'],
          localStorage: true,
          stories: [
            {
              id: "AndroidBl3rabiofficial",
              photo: "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-1/c2.0.200.200a/p200x200/54278066_2562037480477143_3406869012393492480_n.jpg?_nc_cat=106&_nc_oc=AQm_CnnkKfQamG-1kO8aLhSRc_W_nBHDMIPBOSzwGVXRHYcba8XsOe0DXC1J19OLz7E&_nc_ht=scontent-hbe1-1.xx&oh=189e7efb2cffbe1c7057ea6e29d1feee&oe=5DE7E976",
              name: "AndroidBl3rabiofficial",
              link: "https://www.facebook.com/AndroidBl3rabiofficial/",
              lastUpdated: timestamp(),
              items: [
                Zuck.buildItem("AndroidBl3rabiofficial-1", "photo", 4, "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67650288_2838456089501946_7182658634428448768_n.jpg?_nc_cat=109&_nc_oc=AQkj7tMpLmAC5NCGTKlvMyDmktYUR6_iochGivRKcRmdScj-lCNv8rOnxWuheY5CSJY&_nc_ht=scontent-hbe1-1.xx&oh=d7f7f1c51032211836f5b4ced2cafd10&oe=5DD60FDB", "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67650288_2838456089501946_7182658634428448768_n.jpg?_nc_cat=109&_nc_oc=AQkj7tMpLmAC5NCGTKlvMyDmktYUR6_iochGivRKcRmdScj-lCNv8rOnxWuheY5CSJY&_nc_ht=scontent-hbe1-1.xx&oh=d7f7f1c51032211836f5b4ced2cafd10&oe=5DD60FDB", 'https://www.technocyper.com/2019/07/hd-camera-pro-apk-hd-camera-pro-apk-hd.html', false, false, timestamp()),
                Zuck.buildItem("AndroidBl3rabiofficial-2", "photo", 3, "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67414154_2831290070218548_1893661307123531776_n.jpg?_nc_cat=104&_nc_oc=AQnm-62DO8Y2OwsVNCksLGiihlK0okx3axreMJcS-F9VFwUibl8A2sG3Nlt6YAZ_8d8&_nc_ht=scontent-hbe1-1.xx&oh=30d7f70cdea20481d80faab458349512&oe=5DE4B5F6", "https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/67414154_2831290070218548_1893661307123531776_n.jpg?_nc_cat=104&_nc_oc=AQnm-62DO8Y2OwsVNCksLGiihlK0okx3axreMJcS-F9VFwUibl8A2sG3Nlt6YAZ_8d8&_nc_ht=scontent-hbe1-1.xx&oh=30d7f70cdea20481d80faab458349512&oe=5DE4B5F6", 'https://elbana3info.blogspot.com/2019/07/puffin-browser.html', false, false, timestamp()),
              ]
            }
          ]
        });

        var el = document.querySelectorAll('#skin option');
        var total = el.length;
        for (var i = 0; i < total; i++) {
          var what = (skin == el[i].value) ? true : false;

          if (what) {
            el[i].setAttribute('selected', what);

            header.innerHTML = skin;
            header.className = skin;
          } else {
            el[i].removeAttribute('selected');
          }
        }

        document.body.style.display = 'block';
      };

      initDemo();
//]]>
