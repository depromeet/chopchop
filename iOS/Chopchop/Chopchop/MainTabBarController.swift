//
//  MainTabBarController.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 14..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class MainTabBarController: UITabBarController {

    override func viewDidLoad() {
        super.viewDidLoad()
        delegate = self

        
        navigationItem.title = "ChopChop"


        // Do any additional setup after loading the view.
    }

    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        
        // 탭바에 컨트롤러 추가하기
        let homeVC = HomeVC()
        let iconHome = UITabBarItem(title: "Home", image: nil, selectedImage: nil)
        homeVC.tabBarItem = iconHome
        
        let roomListVC = RoomListVC()
        let iconRoom = UITabBarItem(title: "Room", image: nil, selectedImage: nil)
        roomListVC.tabBarItem = iconRoom
        
        let mapVC = MapVC()
        let iconMap = UITabBarItem(title: "Map", image: nil, selectedImage: nil)
        mapVC.tabBarItem = iconMap
        
        let myPageVC = MyPageVC()
        let iconMyPage = UITabBarItem(title: "My Page", image: nil, selectedImage: nil)
        myPageVC.tabBarItem = iconMyPage
        
        let controllers = [homeVC, roomListVC, mapVC, myPageVC]
        self.viewControllers = controllers
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
}


extension MainTabBarController: UITabBarControllerDelegate {
    //Delegate methods
    func tabBarController(_ tabBarController: UITabBarController, shouldSelect viewController: UIViewController) -> Bool {
        print("Should select viewController: \(viewController.title) ?")
        
        
        return true
    }
}
