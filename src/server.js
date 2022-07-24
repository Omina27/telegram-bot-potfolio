const TelegramBot = require('node-telegram-bot-api')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 6000
const bot = new TelegramBot('5158770198:AAF9L6hQ7nFIRmAfxdXkPd1XUqEkrWTsskg', {
    polling: true
})

bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}, welcome to my porfolio bot `, {
        reply_markup: JSON.stringify({
            keyboard: [
                [
                    {
                        text: "About me 👩🏻‍🏫"
                    },
                    {
                        text: "Techniques 💻"
                    }
                ],
                [
                    
                    {
                        text: "Projects 💼"
                    },
                    {
                        text: "Contact 📞"
                    }
                ]
                
            ],
            resize_keyboard: true
        })
    })

})

bot.on('message', msg => {
    const chatId = msg.chat.id

    ///about

    if(msg.text === 'About me 👩🏻‍🏫'){
        bot.sendPhoto(chatId, './images/resume.jpg', {
            caption: `
            <i>"Fullname: Abdusattorova Omina\n Address: Sergeli district \n Job: Junior fullstack developer \n Study place: Najot ta'lim \n Purpose: Gaining experience in building, developing, and managing websites. "</i>
            `,
            parse_mode: "HTML",
            
        })
    }

    if (msg.text === "Techniques 💻") {
        bot.sendPhoto(chatId, './images/languages.jpg', {
            caption: `
            <i>Postgresql, MongoDB, React js, Git, \n Node js, Express, Graphql, Telegram-bot</i>
            `,
            parse_mode:'HTML'
        })
    }

    if (msg.text === "Projects 💼") {
        bot.sendMessage(chatId, "Projects", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Restaurants"
                        },
                        {
                            text: "Todo list"
                        }
                    ],
                   
                    [
                        {
                            text: "Farangeyt"
                        },
                        {
                            text: "Which is fast"
                        }
                    ],
                    [
                        {
                            text: "Twitter"
                        },
                        {
                            text: "Coffee"
                        }
                    
                    ],
                    [
                        {
                            text: "Back ⬅️"
                        }
                    ] 
                ],
                resize_keyboard: true
            })
        })
    }

    if(msg.text === "Contact 📞") {
        const chatId = msg.chat.id
        bot.sendMessage(chatId, 'By these social networks you can get in touch with me',{
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: "Telegram"

                        },
                    
                        {
                            text: "Instagram"

                        }
                    ],
                    [
                        {
                            text: "Facebook"
    
                        },
                        {
                            text: "LinkedIn"
                        }
                    ],
                    [
                        
                        {
                            text: "Share your telegram contact"
                        },
                        {
                            text: "Back ⬅️"
                        }
                        
                    ]
 
                    
                ],
                resize_keyboard:true

            })
        })

        
    }
})

bot.on('message', msg => {
    const chatId = msg.chat.id
    if (msg.text == "Back ⬅️") {
        bot.sendMessage(chatId, "Main menu", {
            reply_markup: JSON.stringify({
                keyboard: [
                    
                [  
                    {
                        text: "About me 👩🏻‍🏫"
                    },
                    {
                        text: "Techniques 💻"
                    }
                ],
                [
                    {
                        text: "Projects 💼"
                    },
                    {
                        text: "Contact 📞"
                    }
                ]
                
                    
                ],
                resize_keyboard: true
            })
        })
    }

    if(msg.text == "Restaurants") {
        bot.sendPhoto(chatId, './images/restaurant.jpg', {
            caption: `
            <i>Programming languages
            Backend: Graphql
            Database: Postgresql
            Frontend: React js</i>
            `,
            parse_mode: "HTML", 
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://carusel.netlify.app/",
                            callback_data: "link_inline"
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Todo list") {
        bot.sendPhoto(chatId, './images/todo.jpg', {
            caption: `
            <i>Todo list was made with html, css, js</i>
            `,
            parse_mode: "HTML", 
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://supper-to-do.netlify.app/",
                            callback_data: "link_inline"
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Farangeyt") {
        bot.sendPhoto(chatId, './images/farangeyt.jpg', {
            caption: `
            <i>Farangeyt app was made with html, css, js</i>
            `,
            parse_mode: "HTML", 
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://farangeyt.netlify.app/",
                            callback_data: "link_inline"
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Which is fast") {
        bot.sendPhoto(chatId, './images/which-is-fast.jpg', {
            caption: `
            <i>Race app was made with html, css, js</i>
            `,
            parse_mode: "HTML", 
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://kim-birinchi-boradi-1.netlify.app/",
                            callback_data: "link_inline"
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Twitter") {
        bot.sendPhoto(chatId, './images/twitter.jpg', {
            caption: `
            <i>Twitter app was made with React.jsx</i>
            `,
            parse_mode: "HTML", 
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://twitter-react-login.netlify.app/",
                            callback_data: "link_inline"
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Coffee") {
        bot.sendPhoto(chatId, './images/coffee.jpg', {
            caption: `
            <i>Coffee toaster website was made with Html, css</i>
            `,
            parse_mode: "HTML", 
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://coffeeroaster-home-page-responsive.netlify.app/",
                            callback_data: "link_inline"
                        }
                    ]
                ]
            }
        })
    }
    if (msg.text == "Telegram") {
        bot.sendMessage(chatId, 'Telegram', {
            caption: `
            <i>Telegram link</i>
            `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://t.me/lilrose_dev"
                        }
                    ]
                ]
            }
        })
    }
    if (msg.text == "Instagram") {
        bot.sendMessage(chatId, 'Instagram', {
            caption: `
            <i>Instagram link</i>
            `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://www.instagram.com/lilrose_dev/"
                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Facebook") {
        bot.sendMessage(chatId, 'Facebook', {
            caption: `
            <i>Facebook link</i>
            `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://www.facebook.com/profile.php?id=100078071086850"
                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "LinkedIn") {
        bot.sendMessage(chatId, 'LinkedIn', {
            caption: `
            <i>LinkedIn link</i>
            `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Go to link",
                            url: "https://www.linkedin.com/in/omina-abdusattorova-020511221/"
                        }
                    ]
                ]
            }
        })
    }

    if(msg.text == "Share your telegram contact") {
        bot.sendMessage(chatId, "Go next stage", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Share my contact',
                            callback_data: 'contact_inline'
                        }
                        
                    ]
                ]
            }
        })
    }

})

bot.on('callback_query', msg => {
    const chatId = msg.message.chat.id
    if(msg.data == "contact_inline") {
        bot.sendMessage(chatId, "Share my contact", {
            reply_markup: JSON.stringify({
                keyboard: [
                    [
                        {
                            text: 'Share contact',
                            request_contact: true
                        }, 
                        { 
                            text:  "Back ⬅️"
                        }
                    ]
                ],
                resize_keyboard: true
            })

        })    
    }
})





app.listen(PORT, console.log(PORT))
