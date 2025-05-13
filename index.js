function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
function numPointsScored(playerName) {
    const game = gameObject();
    for (const teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        
        for (const player in players) {
            if (player === playerName) {
                return players[player].points;
            }
        }
    }
}
            function shoeSize(playerName) {
                const game = gameObject();
                for (const teamKey in game) {
                    const players = game[teamKey].players;

                    for (const player in players) {
                        if (player === playerName) {
                            return players[player].shoe;
                        }
                    }
                }
            }
                        function teamColors (teamName) {
                            const game = gameObject();

                            for (const teamKey in game) {
                                const team = game[teamKey];
                                if (team.teamName === teamName) {
                                    return team.colors;
                                }
                            }
                        }
                            function teamNames() {
                                const game = gameObject();
                                const names = [];

                                for (const teamKey in game) {
                                    names.push(game[teamKey].teamName);
                                }
                                return names;
                            }
                            function playerNumbers(teamName) {
                                const game = gameObject();

                                for (const teamKey in game) {
                                    const team = game[teamKey];
                                    if (team.teamName === teamName) {
                                        const numbers = [];
                                        for (const player in team.players) {
                                            numbers.push(team.players[player].number);
                                        }
                                          return numbers;  
                                        }
                                    }
                                }
                                        function playerStats(playerName) {
                                            const game = gameObject();

                                            for (const teamKey in game) {
                                                const players = game[teamKey].players;
                                                for (const player in players) {
                                                    if (player === playerName) {
                                                        return players[player];
                                                    }
                                                }
                                            }
                                        }
                                                    function bigShoeRebounds() {
                                                        const game = gameObject();
                                                        let maxShoeSize = 0;
                                                        let rebounds = 0;
                                                        for (const teamKey in game) {
                                                            const players = game[teamKey].players;
                                                            for (const player in players) {
                                                                const shoeSize = players[player].shoe;
                                                                if (shoeSize > maxShoeSize) {
                                                                    maxShoeSize = shoeSize;
                                                                    rebounds = players[player].rebounds;
                                                                }
                                                            }
                                                        }
                                                        return rebounds;
                                                    }
                                                    function mostPointsScored() {
                                                        const game = gameObject();
                                                        let maxPoints = 0;
                                                        let topScorer = "";
                                                        for (const teamKey in game) {
                                                            const players = game[teamKey].players;
                                                            for (const player in players) {
                                                                const points = players[player].points;
                                                                if (points > maxPoints) {
                                                                    maxPoints = points;
                                                                    topScorer = player;
                                                                }
                                                            }
                                                        }
                                                        return topScorer;
                                                    }
                                                    function winningTeam() {
                                                        const game = gameObject();
                                                        let highestPoints = 0;
                                                        let winner = "";
                                                        for (const teamKey in game) {
                                                            const team = game[teamKey];
                                                            const players = team.players;
                                                            let teamPoints = 0;
                                                            for (const player in players) {
                                                                teamPoints += players[player].points;
                                                            }
                                                            if (teamPoints > highestPoints) {
                                                                highestPoints = teamPoints;
                                                                winner = teamName;
                                                            }
                                                        }
                                                    return winner;
                                                }
                                                function playerWithLongestName() {
                                                    const game = gameObject();
                                                    let LongestName = "";
                                                    let maxLength = 0;
                                                    for (const teamKey in game) {
                                                        const players = game[teamKey].players;
                                                        for (const player in players) {
                                                            if (player.length > maxLength) {
                                                                maxLength = player.length;
                                                                LongestName = player;
                                                            }
                                                        }
                                                    }
                                                    return LongestName;
                                                }
                                                function doesLongNameStealATon () {
                                                    const game = gameObject();
                                                    const LongestName = playerWithLongestName();
                                                    let maxSteals = 0;
                                                    let topThief = "";
                                                    for (const teamKey in game) {
                                                        const players = game[teamKey].players;
                                                        for (const player in players) {
                                                            const steals = players[player].steals;
                                                            if (steals > maxSteals) {
                                                                maxSteals = steals;
                                                                topThief = player;
                                                            }
                                                        }
                                                    }
                                                    return LongestName === topThief;
                                                }
                                                
                                            


                                                
                                                        

                                                    
                                                
                                            
                                        
                                    
                                
                            
                            
                        

                    
                
            
        
    
